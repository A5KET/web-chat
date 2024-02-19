import { ChatController } from '../controllers/chat.js'
import { ChatListElementController } from '../controllers/chatlist.js'


export class ControllerFactory {
  createChatController(model, view, context, modelFactory, viewFactory) {
    return new ChatController(model, view, context, modelFactory, viewFactory)
  }

  createChatListElementController(model, view) {
    return new ChatListElementController(model, view)
  }
}
