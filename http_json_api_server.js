const http = require('http');
const url = require('url');
const port = process.argv[2];

const server = http.createServer((request, response) => {
  if (request.method == 'GET') {
    const parsedUrl = url.parse(request.url, true);
    const date = new Date(parsedUrl.query.iso);
    response.writeHead(200, { 'Content-Type': 'application/json' } );
    if (parsedUrl.pathname === '/api/parsetime') {
      response.write(JSON.stringify({
        'hour': date.getHours(),
        'minute': date.getMinutes(),
        'second': date.getSeconds()
      }));
      response.end();
    } else if (parsedUrl.pathname === '/api/unixtime') {
      response.write(JSON.stringify({
        'unixtime': date.getTime()
      }));
      response.end();
    }
  }
});
server.listen(port);
