'use strict';

var utils = require('../utils/writer.js');
var Register = require('../service/RegisterService');

module.exports.createRegister = function createRegister (req, res, next) {
  var body = req.swagger.params['body'].value;
  Register.createRegister(body)
    .then(function (response) {
      utils.writeJson(res, response[0], response[1].status);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRegisterById = function getRegisterById (req, res, next) {
  var id = req.swagger.params['id'].value;
  Register.getRegisterById(id)
    .then(function (response) {
      utils.writeJson(res, response[0], response[1].status);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
