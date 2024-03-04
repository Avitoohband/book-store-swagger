'use strict';

var utils = require('../utils/writer.js');
var Librarians = require('../service/LibrariansService');

module.exports.addBook = function addBook (req, res, next, body) {
  Librarians.addBook(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
