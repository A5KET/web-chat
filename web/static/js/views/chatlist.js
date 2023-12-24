import { View, createElement } from './view.js'
import { ClassName } from './classname.js'
import { ImageSource } from './images.js'
import { getTimeStringAsHoursMinutes } from '../time.js'
import { ChatEvents, ChatListChoiceEvent, ChatListElementClickEvent } from '../events.js'
import { MessageType } from '../types.js'


export class ChatListElementView extends View {
  constructor(model) {
    super()
    const node = createElement('div', ClassName.ChatListElement.Container)

    const username = createElement('span', ClassName.ChatListElement.Username)
    username.textContent = model.user.username

    const time = createElement('span', ClassName.ChatListElement.Time)

    const lastMessage = createElement('div', ClassName.ChatListElement.LastMessage.Container)


    node.appendChild(username)
    node.appendChild(time)
    node.appendChild(lastMessage)

    node.addEventListener('click', (event) => {
      this.dispatchEvent(new ChatListElementClickEvent(ChatEvents.ChatListElementClick, model))
    })

    this.lastMessage = lastMessage
    this.time = time
    this.node = node

    this.updateTime(model.creationTime)
  }

  updateTime(time) {
    this.time.textContent = getTimeStringAsHoursMinutes(time)
  }

  updateLastMessage(message) {
    const newLastMessage = createElement('div', ClassName.ChatListElement.LastMessage.Container)

    if (message) {
      const img = createElement('img', ClassName.ChatListElement.LastMessage.Icon)
      img.src = ImageSource.ChatListElementIcon

      let imgMessageTypeClass = ''
      switch (message.type) {
      case MessageType.Received:
        imgMessageTypeClass = ClassName.ChatListElement.LastMessage.Type.Received
        break
      case MessageType.Sended:
        imgMessageTypeClass = ClassName.ChatListElement.LastMessage.Type.Sended
      }
      newLastMessage.classList.add(imgMessageTypeClass)

      const text = createElement('span', ClassName.ChatListElement.LastMessage.Text)
      text.textContent = message.text

      newLastMessage.appendChild(img)
      newLastMessage.appendChild(text)

      this.updateTime(message.time)
    }

    this.lastMessage.replaceWith(newLastMessage)
    this.lastMessage = newLastMessage
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
