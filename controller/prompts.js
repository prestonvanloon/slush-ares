(function IIFE() {
  'use strict';

  function makePrompts(defaults) {
    var prompts = Object.freeze([{
      name: 'controllerName',
      message: 'What is the name of your controller?',
      validate: function(input) {
        var done = this.async();

        done(true);
      }
    }, {
      type: 'confirm',
      name: 'moveon',
      message: 'Continue?'
    }]);

    return prompts;
  }

  module.exports = makePrompts;
})();
