import { ChatEvents, NewMessageEvent, ChatHistoryUpdateEvent } from '../events.js'

import { Model } from './model.js'


export class ChatModel extends Model {
  constructor(user, creationTime) {
    super()
    this.user = user
    this.creationTime = creationTime
    this.messages = []
  }

  addMessage(message) {
    this.messages.push(message)

    this.dispatchEvent(new NewMessageEvent(ChatEvents.NewMessage, message))
    this.dispatchEvent(new ChatHistoryUpdateEvent(ChatEvents.ChatHistoryUpdate))
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
}
