(function IIFE() {
  'use strict';

  const expect = require('chai').expect;

  const <%= modelName %> = require('./<%= modelLower %>.model');

  describe('<%= modelName %> Model', function() {
    afterEach(function(done) {
      <%= modelName %>.remove({}, done);
    });

    describe('.generateMinimumModel', function() {
      it('should be ok', function() {
        return <%= modelName %>.create(<%= modelName %>.generateMinimumModel());
      });
    });
    // Insert model tests here
  });
})();
