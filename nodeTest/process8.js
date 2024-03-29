const child = require('child_process').fork(`${__dirname}/child.js`);
const server = require('net').createServer();
server.on('connection', socket => {
  socket.end('handled by parent');
});

server.listen(1337, () => {
  child.send('server', server);
});
