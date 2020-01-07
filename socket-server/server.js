const express = require('express');
const http = require ('http');
const socketio = require('socket.io')


const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection',(socket)=>{
    console.log('One user connected');
    // socket.on('TEST', ()=>{
    //     console.log('TEST EVENT FIRED');
    //     socket.emit('TEST SERVER')
    // })
    // socket.on('onClientMsg',(msg)=>{
    //     console.log(msg);
    //     socket.emit('onServerMsg', msg+'--- this message is from the server')
    // })

    socket.on('onClientMsg',(msg)=>{
        // all clients would have the same if I put io instead of socket
        io.emit('onServerMsg',msg);
    })
})

server.listen(3000, ()=>console.log('Server Started'));
