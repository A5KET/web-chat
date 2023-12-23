import { ChatEvents } from '../events.js'


export class ChatListController {
  constructor(model, view, viewFactory, controllerFactory) {
    model.addEventListener(ChatEvents.AddChat, (event) => {
      const chatView = viewFactory.createChatListElementView(event.chat)

      view.addChat(chatView)
    })
  }
}