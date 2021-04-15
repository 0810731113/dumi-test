/*
//shared
var data;
onconnect = function(e) {
  var port = e.ports[0];
  port.onmessage = function(e) {

    if(e.data=='get'){
      port.postMessage(data);
    }else{
      data=e.data;
    }
  }
}
*/

var clients = [];
onconnect = function(e) {
  var port = e.ports[0];
  clients.push(port);
  port.addEventListener('message', function(e) {
    for (var i = 0; i < clients.length; i++) {
      var eElement = clients[i];
      eElement.postMessage(e.data);
    }
  });
  port.start();
};
