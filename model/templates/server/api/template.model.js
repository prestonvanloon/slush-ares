(function IIFE() {
  'use strict';

  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  const <%= modelName %>Schema = new Schema({
    // Insert model specifications here
  });

  <%= modelName %>Schema.statics.generateMinimumModel = function() {
    return {};
  };

  module.exports = mongoose.model('<%= modelName %>', <%= modelName %>Schema);
})();
