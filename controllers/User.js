'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.createUser = function createUser (req, res, next) {
  var body = req.swagger.params['body'].value;
  User.createUser(body)
    .then(function (response) {
      utils.writeJson(res, response[0], response[1].status);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 400);
    });
};

module.exports.deleteUser = function deleteUser (req, res, next) {
  var username = req.swagger.params['username'].value;
  User.deleteUser(username)
    .then(function (response) {
      utils.writeJson(res, response[0], response[1].status);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserByName = function getUserByName (req, res, next) {
  var username = req.swagger.params['username'].value;
  User.getUserByName(username)
    .then(function (response) {
      utils.writeJson(res, response[0], response[1].status);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUser = function updateUser (req, res, next) {
  var username = req.swagger.params['username'].value;
  var body = req.swagger.params['body'].value;
  User.updateUser(username,body)
    .then(function (response) {
      utils.writeJson(res, response[0], response[1].status);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
