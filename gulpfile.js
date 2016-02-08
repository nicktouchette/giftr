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
//   .pipe(maps.init())
//   .pipe(concat("main.js"))
//   .pipe(maps.write('./'))
//   .pipe(gulp.dest("public/js"));
// });

gulp.task("compileSass", function() {
  return gulp.src("scss/style.scss")
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

gulp.task('watchSass', function() {
  gulp.watch(['scss/*.scss'], ['compileSass']);
});

gulp.task("build", ['compileSass', 'test']);

gulp.task("default", ["build"]);
