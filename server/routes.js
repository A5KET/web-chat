async function routes(app, options) {
  app.get('/', async (request, reply) => {
    return reply.sendFile('index.html')
  })
}


export default routes