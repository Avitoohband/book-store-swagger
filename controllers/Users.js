'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.borrowOrReturnBook = function borrowOrReturnBook (req, res, next, shortISBN, action) {
  Users.borrowOrReturnBook(shortISBN, action)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
