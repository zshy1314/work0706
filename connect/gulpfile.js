var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'www',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./www/index.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./www/index.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);