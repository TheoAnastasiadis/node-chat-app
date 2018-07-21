const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '../public');

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(publicPath))

io.on('connection', (socket) => {
    console.log('New user connected!')

    socket.emit('newEmail', {
        from:'mike@example.com',
        text:"lalalala"
    })

    socket.on('createMessage', (message) => {
        console.log('New message', message)
        io.emit('newMessage',{
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        })
    })
})


const port = process.env.PORT || 3000
server.listen(port, () => {
    console.log(`Server running on ${port}...`)
})