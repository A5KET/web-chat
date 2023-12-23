import { TextMessageModel } from '../models/message.js'


export class ModelFactory {
  createTextMessageModel(author, text, time, type) {
    return new TextMessageModel(author, text, time, type)
  }
}
