const gulp = require('gulp');

/**
 * Gulp tasks
 */

gulp.task('watch', (done) => {
  gulp.watch([
    'pages/**/*.pug',
  ], gulp.series('pug'));
  gulp.watch([
    'pages/*.!(pug)',
  ], gulp.series('copy:root'));
  gulp.watch([
    'assets/fonts/*',
  ], gulp.series('copy:fonts'));
  gulp.watch([
    'assets/sass/**/*.scss',
  ], gulp.series('sass'));
  return done();
});
