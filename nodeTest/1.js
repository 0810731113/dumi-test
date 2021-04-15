let i = 0;
let timer = setInterval(function() {
  if (i > 20) {
    clearInterval(timer);
  }
  process.stdout.write('写入数据' + i + '\r\n');
  i++;
}, 1000);
