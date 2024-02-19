import { View, createElement } from './view.js'
import { ClassName } from './classname.js'
import { getTimeStringAsHoursMinutes } from '../time.js'
import { MessageType } from '../types.js'


export class TextMessageView extends View {
  constructor(model) {
    super()
    const node = createElement('div', ClassName.ChatMessage.Container)
    node.lang = 'en'

    if (model.type == MessageType.Received) {
      node.classList.add(ClassName.ChatMessage.Type.Received)
    }
    else {
      node.classList.add(ClassName.ChatMessage.Type.Sended)
    }

    const text = document.createElement('span')
    text.className = ClassName.ChatMessage.Text
    text.textContent = model.text

    const time = document.createElement('span')
    time.className = ClassName.ChatMessage.Time

    time.textContent = getTimeStringAsHoursMinutes(model.time)

    node.appendChild(text)
    node.appendChild(time)

    this.text = text
    this.time = time
    this.node = node
  }
}
