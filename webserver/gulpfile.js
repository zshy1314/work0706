var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
	gulp.src('./')
		.pipe(webserver({
			port:9666,
			livereload: true,
			open:"./www/index.html"
		}));
});