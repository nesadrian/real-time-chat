const app = require('express')();
const http = require('http').createServer(app);
const socketIO = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

socketIO.on('connection', (socket) => {
    console.log("User connected")
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
})

http.listen(3000, () => {
});