const http = require('http');
const ws = require('ws');


/**
 * 
 * @param {http.Server} server 
 */
function socketServer(server) {
    const webSocketServer = new ws.Server({server});

    /** @type {ws.WebSocket[]} */
    const sockets = [];
    webSocketServer.on('connection', (socket, req) => {
        socket.onerror = console.error;

        // Get username
        socket.addEventListener('message', (message) => {
            socket.username = message.data;
            sockets.push(socket);

            socket.addEventListener('message', onMessage);
        }, { once: true });
        
        /**
         * 
         * @param {string} message 
         */
        function onMessage(message) {
            console.log(message.data);
            const messageData = {
                'text': message.data,
                'sender': this.username,
                'time': new Date()
            }
            
            response = JSON.stringify(messageData);
            sockets.forEach((sock) => {
                if (sock != socket) {
                    sock.send(response);
                }
            })
        }
    });

    return webSocketServer;
}


module.exports = socketServer;
