import { View, createElement } from './view.js'
import { InputEnterEvent, ChatEvents } from '../events.js'
import { ClassName } from './classname.js'


export class ChatInputView extends View {
  constructor() {
    super()
    const node = createElement('div', ClassName.ChatInput.Container)

    const input = createElement('textarea', ClassName.ChatInput.Input)

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