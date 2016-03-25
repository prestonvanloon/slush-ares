(function IIFE() {
  'use strict';

  const request = require('supertest');
  const chai = require('chai');

  const app = require('../../app');
  const expect = chai.expect;

  describe('exampleMethod', function() {
    it('should heartbeat', function(done) {
      request(app)
        .get('/api/<%= controllerRoute %>/example')
        .expect(200, done);
    });
  });
})();
