export class User {
  constructor(username) {
    this.username = username
  }
}


export class Message {
  constructor(sender, receiver, text) {
    this.sender = sender
    this.receiver = receiver
    this.text = text
  }
}
