const app = require('express')();
const express = require('express');
const http = require('http').createServer(app);
const socketIO = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

socketIO.on('connection', (socket) => {
    console.log("User connected")
    socket.on('message', (msg) => {
        socketIO.emit('message', msg);
    })
    socket.on('disconnect', () => {
        console.log("User disconnected");
    });
})

http.listen(3000, () => {
});