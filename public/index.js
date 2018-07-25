var socket = io();

socket.on('connect', () => {
  console.log('Connected to server.');

  socket.emit('createMessage', {
    to: 'jen@example.org',
    text: 'Hey. This is Jen.',
    createdAt: 999
  });
});

socket.on('disconnect', () => {
  console.log('Disconnected from server.');
});

socket.on('newMessage', (message) => {
  console.log('newMessage', message)
});
