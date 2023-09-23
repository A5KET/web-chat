const http = require('http');
const path = require('node:path');

const express = require('express');

const webSocket = require('./websocket.js');


const PORT = 8000;
const ROOT = path.join(__dirname);

const app = express();
const server = http.createServer(app);
const ws = webSocket(server);


app.use(express.static('./public'));


app.get('/', (req, res) => {
    res.sendFile('front/index.html', { root: ROOT });
});


server.listen(PORT, () => {
    console.log(`Chat server listening on ${PORT}`);
});
