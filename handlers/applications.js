'use strict';

var mongojs = require('mongojs');
var config = require('../config');
var db = mongojs(config.DB);
var applications = db.collection('applications');

function getApplications(request, reply) {
  applications.find(request.query, function(err, data) {
    if (err) {
      reply(err);
    } else {
      reply(data);
    }
  });
}

function getApplication(request, reply) {
  applications.findOne({applicationtId:request.params.applicationId}, function(err, data) {
    if (err) {
      reply(err);
    } else {
      reply(data);
    }
  });
}

module.exports.getApplications = getApplications;

module.exports.getApplication = getApplication;
