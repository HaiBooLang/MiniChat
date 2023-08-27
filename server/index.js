const express = require('express')
const app = express()
const port = 3000

var server = app.listen(6060)
var io = require('socket.io')(server)

io.on('connection', (socket) => {
    console.log('a user connected')

    socket.on('message', (data) => {
        console.log(data)
        socket.broadcast.emit('broadcastMessage', data)
    })
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})