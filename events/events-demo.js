const events = require("events");
const emitter = new events.EventEmitter();
const http = require('http');

const server = http.createServer((req, res)=>{
    // emit an event
    emitter.emit('test event');
    res.end('Inside the server');
});

// listen to an event
emitter.on('test event',()=>console.log('Hi'));

server.listen(3000, ()=> console.log('Server started'));

