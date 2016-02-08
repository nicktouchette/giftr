'use strict';

var gulp   = require('gulp');
var concat = require('gulp-concat');
var sass   = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var maps   = require('gulp-sourcemaps');

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

gulp.task("default", ["hello"], function() {
  console.log("This is the default task");
});
