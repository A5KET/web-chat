import { deserialize, chatSchema } from './schemas.js'


/** @typedef {import('axios').AxiosInstance} ApiClient */


export class Service {
  baseUrl = '/entity'
  entitySchema = { }

  constructor(api) {
    this.api = api
  }

  formatEntity(entity) {
    return deserialize(this.entitySchema, entity)
  }

  formatEntities(entities) {
    entities.forEach(this.formatEntity.bind(this))

    return entities
  }

  async getAll() {
    const response = await this.api.get(this.baseUrl)

    return response.data
  }
}



export class ChatService extends Service {
  baseUrl = '/chats'
  entitySchema = chatSchema

  /**
   * 
   * @param {ApiClient} api 
   */
  constructor(api) {
    super(api)
  }

  async getAll() {
    const response = await super.getAll()
    const chats = this.formatEntities(response.chats)

    return chats
  }
}
