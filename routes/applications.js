'use strict';

var handlers = require('../handlers/applications');
var routes;

routes = [
  {
    method: 'GET',
    path: '/applications',
    handler: handlers.getApplications
  },
  {
    method: 'GET',
    path: '/application/{applicationtId}',
    handler: handlers.getApplication
  }
];

module.exports = routes;
