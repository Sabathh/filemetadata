"use strict";

const express = require('express');
const server = express();
const router = require('./router');

var port = process.env.PORT || 8080;

server.use('/', router);

server.listen(port, function () {
  console.log('Node app is running on port ' + port);
});

module.exports = server;