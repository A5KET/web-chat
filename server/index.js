import path from 'path'

import Fastify from 'fastify'
import appStatic from '@fastify/static'
import { WebSocketServer } from 'ws'

import routes from './routes.js'
import { SocketServer } from './socket.js'


const app = Fastify({
  logger: false
})

app.register(appStatic, {
  root: path.join(path.resolve(), 'static'),
  prefix: '/static/'
})
app.register(routes)


const start = async () => {
  const socket = new WebSocketServer({ server: app.server })
  const socketServer = new SocketServer(socket)

  try {
    await app.listen({ port: 3000 })
  } catch(error) {
    app.log.error(error)
    process.exit(1)
  }
}

start()
