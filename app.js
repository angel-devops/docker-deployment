const http = require('http');
const os = require('os');

console.log("App server starting... \n");

var handler = function(request, response) {
  console.log("Requested from : " + request.connection.remoteAddress + "\n");
  response.writeHead(200);
  response.end("Hi from : " + os.hostname() + "\n");
};

var www = http.createServer(handler);
console.log("App server created ... \n");
www.listen(8080);