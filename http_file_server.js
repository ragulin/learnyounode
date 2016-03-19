const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const server = http.createServer((request, response) => {
  fs.createReadStream(process.argv[3]).pipe(response);
});

server.listen(port)
