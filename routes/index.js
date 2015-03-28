'use strict';

var handlers = require('../handlers');
var routes = [
  {
    method: 'GET',
    path: '/',
    handler: handlers.getPublicResponse
  }
];

module.exports = routes;
