const server = require('./src/server.js');


const PORT = 8000;


server.listen(PORT, () => {
    console.log(`Chat server listening on ${PORT}`);
});