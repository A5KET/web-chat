import { ChatEvents } from '../events.js'
import { MessageType } from '../types.js'
import { getCurrentTime } from '../time.js'


const MIN_MESSAGE_LENGTH = 1


export class ChatController {
  constructor(model, view, context, modelFactory, viewFactory) {
    this.model = model
    this.view = view

    for (const message of model.messages) {
      view.addMessage(viewFactory.createTextMessageView(message))
    }

    model.addEventListener(ChatEvents.NewMessage, (event) => {
      const messageView = viewFactory.createTextMessageView(event.message)
      view.addMessage(messageView)
    })

    view.input.addEventListener(ChatEvents.InputEnter, (event) => {
      if (event.text.trim().length < MIN_MESSAGE_LENGTH) {
        return
      }

      const messageModel = modelFactory.createTextMessageModel(context.user, event.text, getCurrentTime(), MessageType.Sended)

      model.addMessage(messageModel)
    })
  }
}
