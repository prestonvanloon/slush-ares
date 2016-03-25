(function IIFE() {
  'use strict';

  const methodOverride = require('method-override');
  const compression = require('compression');
  const bodyParser = require('body-parser');
  const express = require('express');
  const path = require('path');
  const morgan = require('morgan');

  const config = require('./environment');

  module.exports = function(app) {
    app.disable('x-powered-by');

    app.use(compression());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    const env = app.get('env');

    if(env !== 'test') {
      app.use(morgan('dev'));
    }
    
    /* istanbul ignore next */
    if(env === 'development' || env === 'test') {
      app.use(require('connect-livereload')());
    }
  };
})();
