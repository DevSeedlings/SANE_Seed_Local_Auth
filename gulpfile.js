var gulp = require('gulp');
var concat = require('gulp-concat');
var annotate = require('gulp-ng-annotate');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var path = require('path');

var paths = {
  jsSource: ['./public/app/**/*.js', '!/public/bundle.js'],
  sassSource: ['./public/styles/**/*.sass']
};

gulp.task('js', function() {
  return gulp.src(paths.jsSource)
  .pipe(plumber())
  .pipe(concat('bundle.js'))
  .pipe(annotate())
  .pipe(gulp.dest('./public'));
});

gulp.task('sass', function () {
  return gulp.src(paths.sassSource)
    .pipe(sass({
      paths: [ path.join(__dirname, 'styles') ]
    }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public/styles'));
});

gulp.task('watch', function() {
  gulp.watch(paths.jsSource, ['js']);
  gulp.watch(paths.sassSource, ['sass']);
});

gulp.task('default', ['watch', 'js', 'sass']);
