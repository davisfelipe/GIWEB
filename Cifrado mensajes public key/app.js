"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require('socket.io')(http);
app.use(express.static('public'));
io.on('connection', function (socket) {
    console.log("Usuario conectado - Socket ID " + socket.id);
    var currentRoom = 'DEFAULT';
    socket.on('JOIN', function (roomName) {
        var room = io.sockets.adapter.rooms[roomName];
        if (room && room.length > 1) {
            io.to(socket.id).emit('ROOM_FULL', null);
            socket.broadcast.to(roomName).emit('INTRUSION_ATTEMPT', null);
        }
        else {
            socket.leave(currentRoom);
            socket.broadcast.to(currentRoom).emit('USER_DISCONNECTED', null);
            currentRoom = roomName;
            socket.join(currentRoom);
            io.to(socket.id).emit('ROOM_JOINED', currentRoom);
            socket.broadcast.to(currentRoom).emit("NEW_CONNECTION", null);
        }
    });
    socket.on('MESSAGE', function (msg) {
        console.log("Nuevo mensaje - " + msg.text);
        socket.broadcast.to(currentRoom).emit('MESSAGE', msg);
    });
    socket.on('PUBLIC_KEY', function (key) {
        socket.broadcast.to(currentRoom).emit('PUBLIC_KEY', key);
    });
    socket.on('disconnect', function () {
        socket.broadcast.to(currentRoom).emit('USER_DISCONNECTED', null);
    });
});
var port = process.env.PORT || 3000;
http.listen(port, function () {
    console.log("Encriptaci\u00F3n de mensajes activo en el puerto " + port + ".");
});
