import { ChatModel } from '../models/chat.js'
import { TextMessageModel } from '../models/message.js'

import { getCurrentTime } from '../time.js'


export class ModelFactory {
  createTextMessageModel(author, text, time, type) {
    return new TextMessageModel(author, text, time, type)
  }

  createChatModel(user, time) {
    time = time ? time : getCurrentTime()

    return new ChatModel(user, time)
  }
}
