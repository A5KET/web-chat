import { authenticateSocketClient } from './auth'


export function registerChatHandlers(server, chatRepository) {
  server.on('connection', (client) => {
    client.on('message', event => {
      const data = event.data
      const chatId = data.chat.id
      const message = data.message
      const chat = chatRepository.getChat(chatId)

      chat.addMessage(message)
    })
  })
}
