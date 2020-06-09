// io is accessible here as we imported the CDN in the HTML file of it.



// Make Web Socket connection to the server
//var socket = io.connect('http:localhost:4000');

var socket = io.connect('http://'+ window.location.hostname +':4000');

//Query DOM

var message = document.getElementById('message');
var handle = document.getElementById('handle');


var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

//Emit events when the user hits the send button

btn.addEventListener('click',function(){
    socket.emit('chat',{
        message: message.value,
        handle:handle.value
        
    }); // this will emit the message down the web socket to the server
    message.value = '';  // this will make the message field empty after sending the message
});

message.addEventListener('keypress',function(){
    socket.emit('typing', handle.value);
});

// Listens for the events on Front-end
socket.on('chat', function(data){
    feedback.innerHTML = "";
   output.innerHTML+= '<p><strong>' + data.handle + ':</strong>' + data.message +'</p>'; 
});

socket.on('typing',function(data){

    feedback.innerHTML = '<p><em>'+ data + ' is typing a message' + '</em></p>';
});