const http = require('http');
const url = process.argv[2];

http.get(url, resp => {
  resp.on('data', data => console.log(data.toString()));
})
