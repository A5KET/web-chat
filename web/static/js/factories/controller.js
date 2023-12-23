import { ChatController } from '../controllers/chat.js'


export class ControllerFactory {
  createChatController(model, view, context, modelFactory, viewFactory) {
    return new ChatController(model, view, context, modelFactory, viewFactory)
  }
}