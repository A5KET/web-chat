const http = require('http');
const ws = require('ws');


class ChatError {
  /**
   * 
   * @param {string} text
   */
  constructor(text) {
    this.type = 'chat-error';
    this.text = text;
  }
}


class ChatMessage {
  constructor(sender, text) {

  }
}


class SocketServer {
  /**
   * 
   * @param {http.Server} server 
   */
  constructor(server) {
    this.socket = new ws.Server({ server });
    this.events = {};
    this.addEvents();

    this.socket.on('connection', (ws, req) => {
      ws.on('error', console.error);

      const handleMessage = (data) => {
        try { // #TODO validation
          data = JSON.parse(data.toString());
        } catch (error) {
          switch (true) {
            case error instanceof SyntaxError:
              data = new ChatError('SyntaxError')
          }
        }

        this.events[data.type](ws, data);
      };

      const handleAuth = (data) => {
        ws.auth = JSON.parse(data);
        ws.on('message', handleMessage);
      }

      ws.once('message', handleAuth);
    });
  }

  /**
   * Adds events
   */
  addEvents() {
    Object.assign(this.events,
      {
        'chat-message':
          /**
           * 
           * @param {WebSocket} ws 
           * @param {ws.Event} event 
           */
          (ws, data) => {
            ws.send({ type: 'chat-message', message: { text: data.text } })
          }
      });
  }
}

module.exports = SocketServer;
