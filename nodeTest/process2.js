process.on('SIGTERM', function(err) {
  console.log('got an error : %s', err.message);
  process.exit(1);
});

setTimeout(function() {
  console.log('send SIGTERM to process %d', process.pid);
  process.kill(process.pid, 'SIGTERM');
}, 500);

setTimeout(function() {
  console.log('never called');
}, 1000);
