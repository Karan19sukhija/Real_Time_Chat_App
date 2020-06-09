var express = require('express');
var socket = require('socket.io');

// App Setup
var app = express();
var server = app.listen(4000,function(){
    console.log('Listening to request on port 4000');
});

// Static files
app.use(express.static('public'));

// Socket Setup
var io = socket(server);

// As the socket it set up now, we will making the event for the client who tries to make a web socket
// connection. Note that each client will have differet socket

io.on('connection',function(socket){
console.log('Client now made a socket connection',socket.id);

socket.on('chat',function(data){
 
    // Now emmitting the chat message to all the clients connected to that server
    io.sockets.emit('chat',data);

}); // here socket is the web socket between a particular client and the server

socket.on('typing',function(data){

    socket.broadcast.emit('typing',data);
});

});