import { View, createElement } from './view.js'
import { ClassName } from './classname.js'


class MessageContextMenu extends View {
  constructor(model) {
    const node = createElement('div', ClassName.MessageContextMenu.Container)
    console.log('boba')

    this.model = model
    this.node = node
  }
}