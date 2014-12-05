'use strict';

var handlers = require('../handlers/municipalities')
  , routes
  ;

routes = [
  {
    method: 'GET',
    path: '/municipalities',
    handler: handlers.getMunicipalities
  },
  {
    method: 'GET',
    path: '/municipality/{municipalityId}',
    handler: handlers.getMunicipality
  }
]

module.exports = routes;