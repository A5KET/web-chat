import path from 'path'

import Fastify from 'fastify'
import appStatic from '@fastify/static'


import routes from './routes.js'


const app = Fastify({
  logger: true
})

app.register(appStatic, {
  root: path.join(path.resolve(), 'static'),
  prefix: '/static/'
})
app.register(routes)


const start = async () => {
  try {
    await app.listen({ port: 3000 })
  } catch(error) {
    app.log.error(error)
    process.exit(1)
  }
}

start()