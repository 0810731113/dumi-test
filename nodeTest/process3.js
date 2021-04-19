process.on('SIGHUP', () => {
  console.log('收到 SIGHUP 信号');
});

setTimeout(() => {
  console.log('退出中');
  process.exit(0);
}, 100);

process.kill(process.pid, 'SIGHUP');

console.log(process.memoryUsage());
