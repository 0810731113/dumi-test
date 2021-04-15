var http = require('http');
var cp = require('child_process');
var server = http.createServer(function(req, res) {
  var child = cp.fork(__dirname + '/cal.js');
  //每个请求都单独生成一个新的子进程
  child.on('message', function(m) {
    res.end(m.result + '\n');
  });
  //为其指定message事件
  console.log(`req.url`);
  // console.log(req);
  console.log(req.url);
  console.log(req.url.substring(1).split('?')[0]);
  var input = parseInt(req.url.substring(1));
  //和postMessage很类似，不过这里是通过send方法而不是postMessage方法来完成的
  child.send({ input: input });
});
server.listen(8000);
