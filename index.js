var app = require('express')();
var http = require('http').createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>Real Time Chat</h1>');
});

http.listen(3000, () => {
});