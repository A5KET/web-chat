import { Model } from './model.js'


export class UserModel extends Model {
  constructor(username) {
    super()
    this.username = username
  }
}
