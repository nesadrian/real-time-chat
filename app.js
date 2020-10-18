const app = require('express')();
const express = require('express');
const http = require('http').createServer(app);
const socketIO = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

http.listen(3000, () => {
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/user-registration', (req, res) => {
    res.sendFile(__dirname + '/user-registration.html')
})

const userList = [];

socketIO.on('connection', (socket) => {
    socket.on('adduser', (username) => {
        socket.username = username;
        userList.push(username);
        socketIO.emit('updateUserlist', userList);
    })

    socket.on('message', (msg) => {
        socketIO.emit('message', msg, socket.username);
    })

    socket.on('disconnect', () => {
        var index = userList.indexOf(socket.username);
        userList.splice(index, 1);
        socketIO.emit('updateUserlist', userList);
    });
})