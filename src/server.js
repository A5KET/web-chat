const http = require('http')
const path = require('node:path')

const express = require('express')

const ChatSocketServer = require('./websocket.js')


const ROOT = path.join(__dirname)

const app = express()
const server = http.createServer(app)
const wss = new ChatSocketServer(server)


app.use(express.static('./public'))


app.get('/', (req, res) => {
  res.sendFile('front/index.html', {root: ROOT})
})

module.exports = server
