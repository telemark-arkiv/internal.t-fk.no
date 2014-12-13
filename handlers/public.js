'use strict';

var message = {
      message: "Hello, I'm your API",
      departments: "/departments",
      department: "/department/<departmentId>",
      journals: "/journals",
      journalsByDateDistinct: "/journals/date/distinct",
      journalsByDate: "/journals/date/<yyyymmdd>",
      journalsByDepartment: "/journals/department/<departmentName>",
      journalsCollection: "/journals/collection/<saSeknr>",
      journalsLatest: "/journals/latest",
      journal: "/journal/<jpSeknr>",
      municipalities: "/municipalities",
      municipality: "/municipality/<municipalityId>",
      recruitments: "/recruitments",
      recruitment: "/recruitment/<recruitmentId>"
    }
  ;

function getPublicResponse(request, reply) {
  reply(message);
}

module.exports.getPublicResponse = getPublicResponse;