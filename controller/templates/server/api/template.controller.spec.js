(function IIFE() {
  'use strict';

  const request = require('supertest');
  const chai = require('chai');

  const app = require('../../app');
  const expect = chai.expect;
  const contentType = 'Content-Type';
  const json = /json/;

  describe('<%= controllerName %> controller', function() {
    it('should heartbeat the example route', function(done) {
      request(app)
        .get('/api/<%= controllerRoute %>/example')
        .expect(contentType, json)
        .expect(404, done);
    });
  });
})();
