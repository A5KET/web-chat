const path = require('path')

const express = require('express')


const app = express()
const PORT = process.env.PORT


app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
