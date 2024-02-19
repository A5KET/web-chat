import {
  TextMessageView,
  ChatListElementView,
  ChatView,
  ChatInputView
} from '../views/index.js'


export class ViewFactory {
  createTextMessageView(model) {
    return new TextMessageView(model)
  }

  createChatListElementView(model) {
    return new ChatListElementView(model)
  }

  createChatInputView() {
    return new ChatInputView()
  }

  createChatView(model) {
    const input = this.createChatInputView()

    return new ChatView(input, model)
  }
}
