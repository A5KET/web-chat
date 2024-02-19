import { Model } from './model.js'
import { ChatEvents, AddChatEvent } from '../events.js'


export class ChatListModel extends Model {
  constructor() {
    super()
    this.chats = []
  }

  addChat(chat) {
    this.chats.push(chat)

    const event = new AddChatEvent(ChatEvents.AddChat, chat)
    this.dispatchEvent(event)
  }
}
