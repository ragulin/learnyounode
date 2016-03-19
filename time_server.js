"use strict";
const net = require('net');
const port = process.argv[2];

function pad(value) {
  return value < 10 ? '0' + value : value;
}

function getDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  return`${year}-${month}-${day} ${hours}:${minutes}`
}

const server = net.createServer(socket => {
  socket.end(getDate() + '\n');
});

server.listen(port);
