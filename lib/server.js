'use strict';

const bweb = require('bweb');
const fs = require('bfile');
const WSProxy = require('./wsproxy');

const index = fs.readFileSync(`${__dirname}/index.html`);

const proxy = new WSProxy({
  ports: [18444]
});

const server = bweb.server({
  port: Number(process.argv[2]) || 8080,
  sockets: false
});

server.on('socket', (socket) => {
  // A bsock socket
  socket.fire('hello', 'world');
});

server.use(server.bodyParser());
server.use(server.cookieParser());
server.use(server.jsonRPC());
server.use(server.router());

server.get('/', (req, res) => {
  res.send(200, index, 'html');
});

proxy.attach(server.http);

server.open();
