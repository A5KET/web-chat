import { View, createElement } from './view.js'
import { ClassName } from './classname.js'


export class ChatPlaceholderView extends View {
  constructor() {
    super()
    const node = createElement('div', ClassName.Chat)

    const chatInfo = createElement('div', ClassName.ChatInfo.Container)
    node.appendChild(chatInfo)

    this.chatInfo = chatInfo
    this.node = node
  }
}


export class ChatView extends View {
  constructor(inputView, model) {
    super()
    const node = createElement('div', ClassName.Chat)

    const userInfo = createElement('div', ClassName.ChatInfo.Container)
    const username = createElement('span', ClassName.ChatInfo.Username)
    username.textContent = model.user.username
    userInfo.appendChild(username)

    const chatHistory = createElement('div', ClassName.ChatHistory)

    node.appendChild(userInfo)
    node.appendChild(chatHistory)
    node.appendChild(inputView.render())

    this.chatHistory = chatHistory
    this.input = inputView
    this.node = node
  }

  addMessage(messageView) {
    this.chatHistory.appendChild(messageView.render())
  }
}
