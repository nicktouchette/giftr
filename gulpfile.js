'use strict';


var gulp      = require('gulp'),
    maps      = require('gulp-sourcemaps'),
    concat    = require('gulp-concat'),
    sass      = require('gulp-sass'),
    uglify    = require('gulp-uglify'),
    rename    = require('gulp-rename'),
    gulpMocha = require('gulp-mocha'),
    env       = require('gulp-env'),
    supertest = require('supertest');

// gulp.task("concatScripts", function() {
//   gulp.src([])
//   .pipe(concat("main.js"))
//   .pipe(gulp.dest("public/js"));
// });

gulp.task("compileSass", function() {
  gulp.src("scss/style.scss")
  .pipe(maps.init())
  .pipe(sass({
    includePaths: require('node-neat').includePaths
  }))
  .pipe(maps.write('./'))
  .pipe(gulp.dest("public/stylesheets"))
});

gulp.task('test', function() {
  env({vars: {ENV:'Test'}});
  gulp.src('test/*.js', {read: false})
    .pipe(gulpMocha({reporter: 'nyan'}))
    .once('end', function () {
      process.exit();
    });
});

// gulp.task("default", ["hello"], function() {
//   console.log("This is the default task");
// });
