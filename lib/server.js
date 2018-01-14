'use strict';

const bweb = require('bweb');
const fs = require('bfile');
const WSProxy = require('./wsproxy');

const index = fs.readFileSync(`${__dirname}/index.html`);
const app = fs.readFileSync(`${__dirname}/app.js`);

const proxy = new WSProxy({
  ports: [8333]
});

const server = bweb.server({
  port: Number(process.argv[2]) || 8080,
  sockets: true
});

server.use(server.router());
server.use(server.jsonRPC());
server.use(server.bodyParser());
server.use(server.cookieParser());

server.get('/', (req, res) => {
  res.send(200, index, 'html');
});

server.get('/app.js', (req, res) => {
  res.send(200, app, 'js');
});

proxy.attach(server.http);

server.open();
