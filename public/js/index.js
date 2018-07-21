var socket = io();

socket.on('connect', function () {
    console.log('Connected to server!')
})

socket.on('newMessage', (message) => {
    console.log('new message!', message)
})