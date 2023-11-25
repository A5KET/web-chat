import { ChatEvent } from './events.js';
import { Message } from '../models.js';


class ChatEvents {
    static MESSAGE = 'chatMessage';
    static ERROR = 'chatError';
}

class SocketClient extends EventTarget {
    constructor(url, auth={}) {
        super();
        this.url = url;
        this.auth = auth;
        this.connection = null;
        this.addListeners();
    }

    addListeners() {

    }

    /**
     * 
     * @param {Object} message
     */
    send(message) {
        this.connection.send(JSON.stringify(message));
    }

    connect() {
        this.connection = new WebSocket(this.url);

        this.connection.addEventListener('open', (event) => {
            this.send(this.auth);
        });
        this.connection.addEventListener('close', console.log);
        this.connection.addEventListener('error', console.error);
        this.connection.addEventListener('message', (message) => {
            const parsedData = JSON.parse(message.data);
            const event = new ChatEvent(parsedData.type);
            this.dispatchEvent(event);
        });
    }
}


class ChatSocketClient extends SocketClient {
    addListeners() {
        super.addListeners();
        this.addEventListener(ChatEvents.ERROR, (event) => {
            this.send({type: ChatEvents.ERROR, text: event.text});
        });
    }

    /**
     * 
     * @param {Message} messageInfo 
     */
    sendMessage(message) {
        this.send({type: 'chatMessage', data: { message: message }});
    }
}


export { ChatSocketClient, ChatEvents };