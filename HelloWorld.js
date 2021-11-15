var http = require('http');
var server = http.createServer(function(req, res) {
res.writeHead(200);
res.end('Testing DevOps setup with Forever and Nodemon..Again..!!');
});
server.listen(8080);
