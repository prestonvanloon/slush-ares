(function IIFE() {
  'use strict';

  var slugify = require('underscore.string').slugify;
  var conflict = require('gulp-conflict');
  var template = require('gulp-template');
  var install = require('gulp-install');
  var rename = require('gulp-rename');
  var jsonfile = require('jsonfile');
  var gulp = require('gulp');
  var _ = require('ramda');


  var moveTemplates = _.curry(function(done, answers) {
    if(!answers.moveon) {
      return done();
    }

    answers.controllerLower = answers.controllerName;
    answers.controllerRoute = answers.controllerName;

    var gulpSrc = [__dirname + '/templates/**/*'];

    gulp.src(gulpSrc, { dot: true })
      .pipe(template(answers))
      .pipe(rename(addControllerDirToPath))
      .pipe(conflict('./'))
      .pipe(gulp.dest('./'))
      .on('end', function() {
        done();
      });

    function addControllerDirToPath(path) {
      if(path.dirname.indexOf('/api') !== -1) {
        path.dirname = path.dirname.replace('/api', '/api/' + answers.controllerLower);
      }

      path.dirname = path.dirname.replace(new RegExp('Template', 'g'), answers.controllerLower);
      path.dirname = path.dirname.replace(new RegExp('template', 'g'), answers.controllerLower);
      path.basename = path.basename.replace(new RegExp('Template', 'g'), answers.controllerLower);
      path.basename = path.basename.replace(new RegExp('template', 'g'), answers.controllerLower);
    }
  });

  module.exports = moveTemplates;
})();
