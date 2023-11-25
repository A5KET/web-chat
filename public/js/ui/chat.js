import { ChatSocketClient, ChatEvents } from '../socket/client.js';
import { Message } from '../models.js';


/**
 * Represents a message history in current chat.
 * 
 * @prop {HTMLElement} dom
 * @prop {Message[]} messages
 */
class Messages {
    messages = [];

    /**
     * 
     * @param {string} selector 
     */
    constructor(selector) {
        this.dom = document.querySelector(selector);
    }
    
    /**
     * Appends a message into the node.
     * 
     * @param {Message} message
     * @param {Object} options
     */
    addMessage(messageInfo, options={ own: false }) {
        const message = document.createElement('div');
        message.className += 'chat-message ';

        if (options.own) {
            message.className += 'chat-message-own ';
        }

        message.innerHTML = messageInfo.text

        this.dom.appendChild(message);
    }
}


class Chat { // #TODO try to use EventTarget
    /**
     * 
     * @param {ChatSocketClient} connection
     */
    constructor(connection, user) {
        this.connection = connection;
        this.user = user;
        this.input = document.querySelector('.chat-input');
        this.messages = new Messages('.chat-messages');

        this.addListeners();
    }

    addListeners() {
        this.connection.addEventListener(ChatEvents.MESSAGE, (event) => {
            console.log('Received message: ', event.data);
            this.messages.addMessage(event.data.message);
        });

        this.input.addEventListener('keydown', (event) => {
            if (event.code == 'Enter') {
                const message = new Message(this.input.value, this.user);
                this.messages.addMessage(message, { own: true});
                this.connection.sendMessage(message);
            }
        })
    }
}

export { Chat };