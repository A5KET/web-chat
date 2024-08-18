export class ChatService {
  constructor(repository) {
    this.repository = repository
  }

  async getAll() {
    return this.repository.getChats()
  }
}
