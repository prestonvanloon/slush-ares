(function IIFE() {
  'use strict';

  function exampleMethod(req, res, next) {
    return res.sendStatus(200);
  }

  module.exports = exampleMethod;
})();
