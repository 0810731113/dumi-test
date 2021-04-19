process.on('message', (m, server) => {
  if (m === 'server') {
    server.on('connection', socket => {
      console.log('我收到消息了');
      socket.send('handled by child');
    });
  }
});
