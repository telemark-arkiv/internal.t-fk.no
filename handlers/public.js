'use strict';

var message = {
  message: 'Hello, I\'m your internal API',
  applications: '/applications',
  application: '/application/<applicationId>',
  quote: 'Thank you for your cooperation'
};

function getPublicResponse(request, reply) {
  reply(message);
}

module.exports.getPublicResponse = getPublicResponse;
