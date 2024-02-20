export class SocketEvent extends Event {
  constructor(type, data) {
    super(type)
    this.data = data
  }
}


export class SocketClient extends EventTarget {
  /**
   * 
   * @param {WebSocket} connection 
   */
  constructor(connection, auth={}) {
    super()

    connection.addEventListener('open', () => {
      this.send(auth)
    })

    connection.addEventListener('message', message => {
      const parsedMessage = this.parseMessage(message)
      console.log(parsedMessage)
      this.dispatchEvent(new SocketEvent(parsedMessage.type, parsedMessage.data))
    })

    connection.addEventListener('close', () => {
      console.log('close')
      this.dispatchEvent(new SocketEvent('close'))
    })

    connection.addEventListener('error', error => {
      console.log(error)
      this.dispatchEvent(new SocketEvent('error', error))
    })

    this.connection = connection
  }

  send(data) {
    this.connection.send(JSON.stringify(data))
  }

  emit(type, data) {
    console.log(type, data)
    this.send({ type: type, data: data })
  }

  parseMessage(message) {
    return JSON.parse(message.toString())
  }
}
