var gulp 	   = require('gulp');
var sass 	   = require('gulp-sass');
var autoPrefix = require('gulp-autoprefixer');


gulp.task('start', function () {
	return gulp.src('scss/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoPrefix({
		browsers: ['last 10 versions'],
		cascde: false
	}))
	.pipe(gulp.dest('css'));
});