const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app); //request listener
const path = require('path');
const socketio = require('socket.io');
const io = socketio(server); //object


const users = {}

// for static files
app.use('/' , express.static(path.join(__dirname , 'public')));


io.on('connection' , (socket)=>{
    console.log(`connection establised at ${socket.id}`);

    socket.on('sam-msg' , (data)=>{ //listen to some event
        // console.log(data.msg);
        // socket.emit('received-msg' , {
        io.emit('received-msg' , {
            msg : data.msg,
            id : socket.id,
            username : users[socket.id]
        })
    }) 

    socket.on('login' , (data)=>{
        // console.log(data);
        users[socket.id] = data.username; //mapping the socketid with username

    })

})



const port = process.env.PORT || 3000;

server.listen(port , ()=>{
    console.log(`server connected at port ${port}`)
})