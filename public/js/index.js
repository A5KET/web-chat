import { Chat } from './ui/chat.js';
import { ChatSocketClient } from './socket/client.js';
import { User } from './models.js';


const user = new User('biba');
const socket = new ChatSocketClient(`ws://${location.host}/websocket`, { username: 'biba' });
const chat = new Chat(socket);

socket.connect()