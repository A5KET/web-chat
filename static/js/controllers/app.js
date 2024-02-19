import { ChatEvents } from '../events.js'


export class AppController {
  constructor(model, view, modelFactory, viewFactory, controllerFactory) {
    view.chats.addEventListener(ChatEvents.ChooseChat, (event) => {
      const chatView = viewFactory.createChatView(event.chat)
      const chatController = controllerFactory.createChatController(event.chat, chatView, model.context, modelFactory, viewFactory)

      view.changeChat(chatView)
    })
  }
}
