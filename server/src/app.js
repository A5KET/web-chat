import Fastify from 'fastify'

import { chatRoutes } from './chats/routes.js'


/**
 * 
 * @param {Object} services 
 * @param {import('fastify').FastifyServerOptions} options 
 * @returns 
 */
export default function createApp(services, options) {
  const app = Fastify(options)

  app.decorateRequest('services', null)

  app.addHook('preHandler', (req, rep, done) => {
    req.services = services
    done()
  })

  app.register(chatRoutes, { prefix: '/chats' })

  return app
}
