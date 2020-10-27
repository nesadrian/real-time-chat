const handleSocketEvents = (socketIO) => {
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
}

module.exports.handleSocketEvents = handleSocketEvents;
