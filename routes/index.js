'use strict';

var publicRoutes = require('./public');
var applicationsRoutes = require('./applications');
var routes = [];

routes = routes.concat(publicRoutes);
routes = routes.concat(applicationsRoutes);

module.exports = routes;
