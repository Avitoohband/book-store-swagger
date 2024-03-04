"use strict";

/**
 * Get a token
 * Return a token for open access.
 *
 * returns inline_response_200
 **/

const jwt = require("jsonwebtoken");
const secret = process.env.TOKEN_SECRET;
const expirationTime = "1m";

exports.getToken = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      token: "token",
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};
