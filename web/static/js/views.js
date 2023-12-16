import { MessageType } from './types.js'
import { ClassNames } from './classnames.js'
import { ChatEvents, InputEnterEvent } from './events.js'
import { getTimeStringAsHoursMinutes } from './time.js'


class View extends EventTarget {
  render() {
    return this.node
  }
}


export class TextMessageView extends View {
  constructor(model) {
    super()
    const node = document.createElement('div')
    node.className = ClassNames.ChatMessage.Container
    node.lang = 'en'

    if (model.type == MessageType.Received) {
      node.classList.add(ClassNames.ChatMessage.Type.Received)
    }
    else {
      node.classList.add(ClassNames.ChatMessage.Type.Sended)
    }

    const text = document.createElement('span')
    text.className = ClassNames.ChatMessage.Text
    text.textContent = model.text

    const time = document.createElement('span')
    time.className = ClassNames.ChatMessage.Time

    time.textContent = getTimeStringAsHoursMinutes(model.time)

    node.appendChild(text)
    node.appendChild(time)

    this.text = text
    this.time = time
    this.node = node
  }
}


export class ChatInputView extends View {
  constructor() {
    super()
    const node = document.createElement('div')
    node.className = ClassNames.ChatInput.Container

    const input = document.createElement('textarea')
    input.className = ClassNames.ChatInput.Input

    input.addEventListener('keydown', (event) => {
      if (event.code == 'Enter') {
        this.enterText()
        input.value = ''
        event.preventDefault()
      }
    })

    node.appendChild(input)

    this.input = input
    this.node = node
  }

  enterText() {
    const event = new InputEnterEvent(ChatEvents.InputEnter, this.input.value)
    this.dispatchEvent(event)
  }
}


export class ChatHistoryView extends View {
  constructor() {
    super()
    const node = document.createElement('div')
    node.className = ClassNames.ChatHistory

    this.node = node
  }

  addMessage(message) {
    this.node.appendChild(message.render())
  }
}


export class ChatView extends View {
  constructor(chatHistory, input) {
    super()
    const node = document.createElement('div')
    node.className = ClassNames.Chat

    node.appendChild(chatHistory.render())
    node.appendChild(input.render())

    this.chatHistory = chatHistory
    this.input = input

    this.node = node
  }
}
