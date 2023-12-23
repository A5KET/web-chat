import { ChatEvents, NewMessageEvent } from '../events.js'

import { Model } from './model.js'


export class ChatModel extends Model {
  constructor(user) {
    super()
    this.user = user
    this.messages = []
  }

  get lastMessage() {
    return this.messages[this.messages.length - 1]
  }

  get hasMessages() {
    return this.numberOfMessages > 0
  }

  get numberOfMessages() {
    return this.messages.length
  }

  addMessage(message) {
    this.messages.push(message)

    const event = new NewMessageEvent(ChatEvents.NewMessage, message)
    this.dispatchEvent(event)
  }

}
