'use strict';

var utils = require('../utils/writer.js');
var Auth = require('../service/AuthService');

module.exports.getToken = function getToken (req, res, next) {
  Auth.getToken()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
