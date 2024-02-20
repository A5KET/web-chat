import { EventEmitter } from 'events'
import { WebSocketServer } from 'ws'


export class SocketClient extends EventEmitter {
  constructor(connection, auth) {
    super()
    this.connection = connection
    this.auth = auth
  }

  emit(eventName, ...args) {
    super.emit(eventName, args)
  }

  disconnect() {
    this.connection.close()
    this.emit('disconnect')
  }
}


export function defaultSocketClientConstructor(connection, auth) {
  return new SocketClient(connection)
}


export class SocketServer extends EventEmitter {
  /**
   * 
   * @param {WebSocketServer} server
   */
  constructor(server, clientConstructor) {
    super()
    this.server = server
    this.clientConstructor = clientConstructor || defaultSocketClientConstructor
    this.addListeners()
  }

  addListeners() {
    this.server.on('connection', (connection, request) => {
      connection.once('message', (message) => {
        const auth = this.parseMessage(message)
        const client = this.clientConstructor(connection, auth)
        console.log(auth)

        connection.on('message', message => this.handleEvent(this.parseMessage(message), client))

        this.emit('connection', client)
      })
    })
  }

  handleEvent(event, client) {
    if (['disconnect'].includes(event.type)) {
      return
    }
    console.log(event)

    client.emit(event.type, event.data)
  }


  parseMessage(message) {
    const messageData = JSON.parse(message.toString())

    return messageData
  }
}
