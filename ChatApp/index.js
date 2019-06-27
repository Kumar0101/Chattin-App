var express = require('express');
var socket = require('socket.io');

// app setup
var app = express();

var server = app.listen(4000,function(){
    console.log('running')
});


// static files

app.use(express.static('public'));

// socket
var io = socket(server);

// handle chat 
io.on('connection',function(socket){
    console.log('Socket is running');
    socket.on('chat',function(data){
        io.emit('chat',data);
    })

    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data);
    })

});