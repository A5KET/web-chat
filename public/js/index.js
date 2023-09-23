class Message {
    /**
     * 
     * @param {string} text 
     * @param {Date} time 
     * @param {string} sender 
     */
    constructor(text, time, sender) {
        this.text = text;
        this.time = time;
        this.sender = sender;
    }
}


class Chat {
    constructor() {
        this.messages = document.querySelector('.chat-messages');
        this.input = document.querySelector('.chat-input');
        this.username = null;
        this.socket = null;

        this.addListeners();
    }

    connectSocket() {
        if (!this.username) {
            throw TypeError('Username is missing');
        }

        const socket = new WebSocket(`ws://${location.host}/websocket`);
        socket.addEventListener('open', (event) => {
            socket.send(this.username);
        });

        socket.addEventListener('message', (event) => {
            const messageData = JSON.parse(event.data);

            const message = new Message(
                messageData.text,
                new Date(messageData.time),
                messageData.sender
            );

            this.appendMessage(message);
        }) 

        this.socket = socket;
    }

    addListeners() {
        document.querySelector('.login-username').addEventListener('keydown', (event) => {
            if (event.code == 'Enter') {
                this.username = event.target.value;
                this.connectSocket();
                document.querySelector('.login-form').style.visibility = 'hidden';
            }
        });

        this.input.addEventListener('keydown', (event) => {
            if (event.code == 'Enter') {
                const message = new Message(
                    this.input.value,
                    new Date(),
                    this.username
                )

                this.input.value = '';

                this.appendMessage(message);
                this.socket.send(message.text);
            }
        });
    }

    /**
     * 
     * @param {Message} message
     */
    appendMessage(message) {
        const messageDiv = document.createElement('div');
        const text = document.createElement('span');
        console.log(message);
        text.textContent = `[${message.time.toLocaleTimeString()}] ${message.sender}: ${message.text}`;
        messageDiv.appendChild(text);
        this.messages.appendChild(messageDiv);
    }
}


const chat = new Chat();