var https = require('https');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World! This is a Kudu deployed NodeJS Application.');
}).listen(443); 
