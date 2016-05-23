# MEAN-seed
This is a fully functional basic MEAN stack app seed. It has passport, gulp, and sass capabilities (gulp and sass not required for use).

###To use this seed
1. Git clone it
2. Run `npm install -g gulp` (if you want to use gulp)
3. In the project folder, run `npm install`
4. In one terminal window run `gulp` (if you want to use gulp)
5. Run 'nodemon'

###To change Sass to Less (do this before you run `npm install`)
Copy and paste this code into gulpfile.js (replacing the whole file)
```javascript
var gulp = require('gulp');
var concat = require('gulp-concat');
var annotate = require('gulp-ng-annotate');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var less = require('gulp-less');
var path = require('path');

var paths = {
  jsSource: ['./public/app/**/*.js', '!/public/bundle.js'],
  lessSource: ['./public/styles/**/*.less']
};

gulp.task('js', function() {
  return gulp.src(paths.jsSource)
  .pipe(plumber())
  .pipe(concat('bundle.js'))
  .pipe(annotate())
  .pipe(gulp.dest('./public'));
});

gulp.task('less', function () {
  return gulp.src(paths.lessSource)
    .pipe(less({
      paths: [ path.join(__dirname, 'styles') ]
    }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public/styles'));
});

gulp.task('watch', function() {
  gulp.watch(paths.jsSource, ['js']);
  gulp.watch(paths.lessSource, ['less']);
});

gulp.task('default', ['watch', 'js', 'less']);

```
