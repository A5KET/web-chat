const ws = require('ws')
const EventEmitter = require('node:events')

const models = require('./models.js')
const errors = require('./errors.js')
const validation = require('./validation.js')


class Events {
  static ERROR = 'chatError'
  static MESSAGE = 'chatMessage'
}

class ChatEvent {
  constructor(socket, data = {}) {
    this.socket = socket
    this.data = data
  }

  toString() {
    return `${this.constructor.name}, Socket: ${this.socket.toString()}`
  }
}


class ChatSocketServer extends EventEmitter {
  constructor(server) {
    super()
    this.webSocketServer = new ws.Server({server})
    this.addListeners()

    this.webSocketServer.on('connection',
      (ws, req) => {
        ws.on('error', console.error)

        const handleMessage = (message) => {
          let parsedMessage
          try { // #TODO validation
            parsedMessage = JSON.parse(message.toString())
          } catch (error) {
            switch (true) {
              case error instanceof SyntaxError:
                this.emit(
                  Events.ERROR,
                  new ChatEvent(ws, Events.ERROR, {message: error.message}),
                )
                ws.terminate()
            }
          }

          const event = new ChatEvent(ws, parsedMessage.data)
          this.emit(parsedMessage.type, event)
        }

        const handleAuth = (data) => {
          try {
            ws.auth = validation.validateAuth(data)
          } catch (error) {
            switch (true) {
              case error instanceof errors.AuthError:
                this.emit(
                  Events.ERROR,
                  new ChatEvent(ws, {message: error.message}),
                )
                ws.terminate()
            }
          }

          console.log('Connected: ', ws.auth.username)
          ws.on('message', handleMessage)
        }

        ws.once('message', handleAuth)
      })
  }

  sendMessage(socket, data) {
    socket.send(JSON.stringify(data))
  }

  addListeners() {
    this.on(Events.ERROR, (event) => {
      console.error('ERROR: ', event)
      this.sendMessage(event.socket,
        {
          type: Events.ERROR,
          message: event.message,
        })
    })

    this.on(Events.MESSAGE, (event) => {
      const sender = new models.User(event.socket.auth.username)
      const message = new models.Message(
        sender,
        event.data.message.text,
        new Date(),
      )
      this.sendMessage(event.socket, {type: Events.MESSAGE, message: message})
    })
  }
}

module.exports = ChatSocketServer
