'use strict';

var message = {
  message: 'Hello, I\'m your internal API',
  docs: '/docs',
  quote: 'Thank you for your cooperation'
};

function getPublicResponse(request, reply) {
  reply(message);
}

module.exports.getPublicResponse = getPublicResponse;