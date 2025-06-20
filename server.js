const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  fs.readFile(path.join(__dirname, req.url === '/' ? 'index.html' : req.url), (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });
}).listen(8080);
