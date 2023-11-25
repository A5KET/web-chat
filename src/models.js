class User {
  constructor(username) {
    this.username = username
  }
}


class Message {
  constructor(sender, text, time) {
    this.sender = sender
    this.text = text
    this.time = time
  }
}


module.exports = {User, Message}
