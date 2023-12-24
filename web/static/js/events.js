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


export class ChatHistoryUpdateEvent extends Event {

}


export class AddChatEvent extends Event {
  constructor(type, chat) {
    super(type)
    this.chat = chat
  }
}


export class ChatListElementClickEvent extends Event {
  constructor(type, chat) {
    super(type)
    this.chat = chat
  }
}


export class ChatListChoiceEvent extends Event {
  constructor(type, chat) {
    super(type)
    this.chat = chat
  }
}


export const ChatEvents = {
  InputEnter: 'inputEnter',
  NewMessage: 'newMessage',
  ChatHistoryUpdate: 'chatHistoryUpdate',
  AddChat: 'addChat',
  ChooseChat: 'chooseChatFromChatList',
  ChatListElementClick: 'listElementClick'
}