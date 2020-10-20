const app = require('express')();
const express = require('express');
const http = require('http').createServer(app);
const socketIO = require('socket.io')(http);
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'pug'); 

http.listen(3000, () => {
});

app.get('/', (req, res) => {
});

app.get('/login', (req, res) => {
    res.render('login.pug', { title: "Login" })
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