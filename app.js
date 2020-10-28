const app = require('express')();
const express = require('express');
const http = require('http').createServer(app);
const socketIO = require('socket.io')(http);
const path = require('path');
const bodyParser = require('body-parser')
const { handleSocketEvents } = require('./src/services/socketServer');
const { loginRouter } = require('./src/routes/login');
const { registerRouter } = require('./src/routes/register');
const { messagesRouter } = require('./src/routes/messages');

app.use('/public', express.static(path.join(__dirname, '/public')));
app.use('/src', express.static(path.join(__dirname, '/src')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'pug');

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/messages', messagesRouter);

handleSocketEvents(socketIO);

module.exports.http = http;
