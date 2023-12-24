import { ChatEvents } from '../events.js'


export class ChatListElementController {
  constructor(model, view) {
    model.addEventListener(ChatEvents.ChatHistoryUpdate, (event) => {
      view.updateLastMessage(model.lastMessage)
    })
  }
}


export class ChatListController {
  constructor(model, view, viewFactory, controllerFactory) {
    model.addEventListener(ChatEvents.AddChat, (event) => {
      const chatView = viewFactory.createChatListElementView(event.chat)
      const chatController = controllerFactory.createChatListElementController(event.chat, chatView)

      view.addChat(chatView)
    })
  }
}