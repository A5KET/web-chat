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

      chatView.addEventListener(ChatEvents.ChatListElementClick, (event) => {
        this.changeActiveChat(chatView)
      })

      view.addChat(chatView)
    })

    this.model = model
    this.view = view
  }

  changeActiveChat(chatElement) {
    if (this.view.activeChat) {
      this.view.activeChat.deactivate()
    }
    chatElement.activate()
    this.view.activeChat = chatElement
  }
}
