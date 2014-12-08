'use strict';

var handlers = require('../handlers/journals')
  , routes
  ;

routes = [
  {
    method: 'GET',
    path: '/journals',
    handler: handlers.getJournals
  },
  {
    method: 'GET',
    path: '/journals/{date}',
    handler: handlers.getJournalsByDate
  },
  {
    method: 'GET',
    path: '/journal/{sakId}',
    handler: handlers.getJournal
  }
]

module.exports = routes;