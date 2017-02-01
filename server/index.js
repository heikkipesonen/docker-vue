'use strict';

require('./db');

const server = require('./server');

server.get('/', (req, res) => {
  res.send(200, {boolean: true});
});