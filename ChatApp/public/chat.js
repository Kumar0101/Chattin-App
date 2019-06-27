// Make conection

var socket = io.connect('http://localhost:4000');

// declaring variables
var handle = document.getElementById('handle')
var message = document.getElementById('message')
var button = document.getElementById('send')
var output = document.getElementById('output')
var feedback = document.getElementById('feedback');


// Emit Events
button.addEventListener('click',function(){
    socket.emit('chat',{
        message:message.value,
        handle:handle.value
    })
});

message.addEventListener('keypress',function(){
    socket.emit('typing',handle.value)
})

// Listen events

socket.on('chat',function(data){
    feedback.innerHTML ='';
    message.value = '';
    output.innerHTML += `<p><strong> ${data.handle} </strong> : ${data.message} </p>`
});

socket.on('typing',function(data){
    feedback.innerHTML = `<p><strong> ${data} is typing ... </strong></p>`
})

