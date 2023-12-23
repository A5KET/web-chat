import { View, createElement } from './view.js'
import { ClassName } from './classname.js'
import { ImageSource } from './images.js'
import { getTimeStringAsHoursMinutes } from '../time.js'
import { ChatEvents, ChatListChoiceEvent, ChatListElementClickEvent } from '../events.js'


export class ChatListElementView extends View {
  constructor(model) {
    super()
    const node = createElement('div', ClassName.ChatListElement.Container)

    const username = createElement('span', ClassName.ChatListElement.Username)
    username.textContent = model.user.username

    node.appendChild(createElement('span'))

    node.appendChild(username)

    if (model.hasMessages) {
      const message = model.lastMessage

      const time = createElement('span', ClassName.ChatListElement.LastMessageTime)
      time.textContent = getTimeStringAsHoursMinutes(model.time)
  
      const img = createElement('img', ClassName)
      img.src = ImageSource.ChatListElementArrow
  
      const text = createElement('span', ClassName.ChatListElement.LastMessageText)
      text.textContent = model.text
  
      node.appendChild(time)
      node.appendChild(text)
    }

    node.addEventListener('click', (event) => {
      this.dispatchEvent(new ChatListElementClickEvent(ChatEvents.ChatListElementClick, model))
    })

    this.node = node
  }
}


export class ChatListView extends View {
  constructor(search, model) {
    super()
    const node = createElement('div', ClassName.ChatList)

    node.appendChild(search.render())

    this.search = search
    this.node = node
  }

  addChat(chat) {
    this.node.appendChild(chat.render())

    chat.addEventListener(ChatEvents.ChatListElementClick, (event) => {
      this.dispatchEvent(new ChatListChoiceEvent(ChatEvents.ChooseChat, event.chat))
    })
  }
}
