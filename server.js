const http = require('http');


const server = http.createServer( () => {
    console.log('testing testing testing testing');
})

server.listen(3001);