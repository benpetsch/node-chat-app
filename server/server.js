const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

require('dotenv').config()
const appPort = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '/../public');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connect', (socket) => {
  console.log('New user connected.');

  socket.emit('newMessage', {
    to: 'mike@example.org',
    text: 'Hey. Whats is going on.',
    createdAt: 123
  });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message)
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    })
  });
});

app.use(express.static(publicPath));

app.get('/hello-world', function (req, res) {
  res.send('Hello World.')
})

server.listen(appPort, () => {
  console.log(`Server is up at port ${appPort}`);
});
