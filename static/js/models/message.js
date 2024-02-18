import { Model } from './model.js'


export class TextMessageModel extends Model {
  constructor(author, text, time, type) {
    super()
    this.author = author
    this.text = text,
    this.time = time
    this.type = type
  }
}