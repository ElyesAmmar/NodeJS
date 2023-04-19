const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

fs.writeFile('welcome.txt', 'Hello Node', function (err) {
    if (err) throw err;
    console.log('welcome.txt created!');
  });

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello Node!!!!</h1>\n');
  } else if (req.url === '/hello') {
    console.log('HELLO WORLD');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('HELLO WORLD\n');
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});