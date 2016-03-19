"use strict";
const http = require('http');
const urls = process.argv.slice(2);

const promises = urls.map(url => {
  return new Promise((resolve, reject) => {
    let response = '';
    http.get(url, resp => {
      resp.setEncoding('utf-8');
      resp.on('data', data => response += data);
      resp.on('end', () => resolve(response));
      resp.on('error', () => reject('Failed on url ' + url));
    });
  });
});

Promise.all(promises).then(responses => console.log(responses.join('\n')));

