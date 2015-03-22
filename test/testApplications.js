'use strict';

var request = require('supertest');
var server = require('../server');
var config = require('../config');

request = request('http://localhost:' + config.SERVER_PORT);

describe('Server applications', function() {

  before(function() {
    server.start();
  });

  after(function() {
    server.stop();
  });

  describe('GET /applications', function() {
    it('respond with json', function(done) {
      request
        .get('/applications')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('GET /application/35', function() {
    it('respond with json', function(done) {
      request
        .get('/application/35')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

});
