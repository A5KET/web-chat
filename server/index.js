import App from './src/app.js'
import { ChatService } from './src/chats/service.js'
import { InMemoryRepository } from './src/repositories.js'


const repository = new InMemoryRepository()
const services = {
  chat: new ChatService(repository)
}

const app = App(services, {
  logger: true
})


app.listen({ port: 3000 }, function (err, address) {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})
