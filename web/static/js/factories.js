import { TextMessageView } from './views.js'
import { TextMessageModel } from './models.js'
import { getCurrentTime } from './time.js'


export class ViewFactory {
  createTextMessageView(model) {
    return new TextMessageView(model)
  }
}


export class ModelFactory {
  createTextMessageModel(author, text, time, type) {
    return new TextMessageModel(author, text, time, type)
  }
}