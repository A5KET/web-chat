export class InputEnterEvent extends Event {
  constructor(type, text) {
    super(type)
    this.text = text
  }
}


export class NewMessageEvent extends Event {
  constructor(type, message) {
    super(type)
    this.message = message
  }
}


export class NewChatEvent extends Event {
  constructor(type, chat) {
    super(type)
    this.chat = chat
  }
}


export const ChatEvents = {
  InputEnter: 'inputEnter',
  NewMessage: 'newMessage',
  NewChat: 'newChat'
}