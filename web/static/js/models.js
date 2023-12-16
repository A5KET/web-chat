import { ChatEvents, NewMessageEvent, NewChatEvent } from './events.js'


class Model extends EventTarget {

}


export class User extends Model {
  constructor(username) {
    super()
    this.username = username
  }
}


export class TextMessageModel extends Model {
  constructor(author, text, time, type) {
    super()
    this.author = author
    this.text = text,
    this.time = time
    this.type = type
  }
}


export class ChatHistoryModel extends Model {
  constructor() {
    super()
    this.messages = []
  }

  addMessage(message) {
    this.messages.push(message)

    const event = new NewMessageEvent(ChatEvents.NewMessage, message)
    this.dispatchEvent(event)
  }
}


export class ChatModel extends Model {
  constructor() {
    super()
  }
}


export class ChatListModel extends Model {
  constructor() {
    super()
    this.chats = []
  }

  addChat(chatModel) {
    this.chats.push(chatModel)

    const event = new NewChatEvent(ChatEvents.NewChat, chatModel)
    this.dispatchEvent(event)
  }
}