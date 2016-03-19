const http = require('http');
const url = process.argv[2];

var response = '';
var chars = 0;
http.get(url, resp => {
  resp.setEncoding('utf-8');
  resp.on('data', data => {
    if (data) {
      chars += data.length;
      response += data;
    }
  });
  resp.on('end', () => {
    console.log(chars);
    console.log(response);
  });
});

