import { View, createElement } from './view.js'


export class AppView extends View {
  constructor(chats, currentChat) {
    super()
    const node = createElement('body')

    node.appendChild(chats.render())
    node.appendChild(currentChat.render())

    this.chats = chats
    this.currentChat = currentChat
    this.node = node
  }

  changeChat(newCurrentChat) {
    this.currentChat.replaceWith(newCurrentChat)
    this.currentChat = newCurrentChat
  }
}