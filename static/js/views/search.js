import { View, createElement } from './view.js'
import { ClassName } from './classname.js'
import { ImageSource } from './images.js'


export class ChatListSearchView extends View {
  constructor() {
    super()
    const node = createElement('div', ClassName.HeaderSearch.Container)

    const buffer = createElement('div', ClassName.HeaderSearch.Buffer)

    const icon = createElement('img', ClassName.HeaderSearch.Icon)
    icon.src = ImageSource.HeaderSearchIcon

    const label = createElement('label', ClassName.HeaderSearch.Label)
    const input = createElement('input', ClassName.HeaderSearch.Input)

    buffer.appendChild(icon)
    buffer.appendChild(label)
    buffer.appendChild(input)
    node.appendChild(buffer)

    this.input = input
    this.node = node
  }
}