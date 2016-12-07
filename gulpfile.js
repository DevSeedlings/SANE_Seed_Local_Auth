var gulp = require('gulp');
var concat = require("gulp-concat");
var annotate = require("gulp-ng-annotate");
var sass = require("gulp-sass");
var nodemon = require('gulp-nodemon');

var paths = {
	jsSource: ['public/app/**/*.js'],
	sassSource: ['public/**/*.scss'],
	server: ['server/index.js']
};

gulp.task('serve', function() {
	nodemon({
		'script': paths.server
	});
});

gulp.task('sass', function() {
	gulp.src(paths.sassSource)
		.pipe(sass())
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./public'));
});

gulp.task('js', function() {
	gulp.src(paths.jsSource)
		.pipe(annotate())
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest('./public'));
});

gulp.task('watch', function() {
	gulp.watch(paths.jsSource, ['js']);
	gulp.watch(paths.sassSource, ['sass']);
});

gulp.task('default', ['js', 'sass', 'watch']);
