/**
 * 
 * @param {import('fastify').FastifyInstance} app 
 * @param {Object} options 
 */
export function chatRoutes(app, options, next) {
  app.get('/', async (req, rep) => {
    const chatService = req.services.chat

    console.log((await chatService.getAll())[0])

    return {
      chats: await chatService.getAll()
    }
  })

  next()
}
