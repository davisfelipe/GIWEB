import express = require('express')
const app = express()
import http = require('http')
http.Server(app)
const io = require('socket.io')(http)
app.use(express.static('public'))
io.on('connection',(socket)=>{
    console.log(`Usuario conectado - Socket ID ${socket.id}`)
    let currentRoom = 'DEFAULT'
    socket.on('JOIN',(roomName)=>{
        let room = io.sockets.adapter.rooms[roomName]
        if (room && room.length > 1){
            io.to(socket.id).emit('ROOM_FULL',null)
            socket.broadcast.to(roomName).emit('INTRUSION_ATTEMPT',null)
        }else{
            socket.leave(currentRoom)
            socket.broadcast.to(currentRoom).emit('USER_DISCONNECTED', null)
            currentRoom=roomName
            socket.join(currentRoom)
            io.to(socket.id).emit('ROOM_JOINED', currentRoom)
            socket.broadcast.to(currentRoom).emit("NEW_CONNECTION",null)
        }
    })
    socket.on('MESSAGE',(msg)=>{
        console.log(`Nuevo mensaje - ${msg.text}`)
        socket.broadcast.to(currentRoom).emit('MESSAGE', msg)

    })
	socket.on('PUBLIC_KEY', (key) => {
        socket.broadcast.to(currentRoom).emit('PUBLIC_KEY', key)
      })  
    socket.on('disconnect', () => {
        socket.broadcast.to(currentRoom).emit('USER_DISCONNECTED', null)
    })
})
const port = process.env.PORT || 3000
http.listen(port, () => {
    console.log(`Encriptación de mensajes activo en el puerto ${port}.`)
})

