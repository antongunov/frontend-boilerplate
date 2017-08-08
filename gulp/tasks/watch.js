const gulp = require('gulp');

/**
 * Gulp tasks
 */

gulp.task('watch', (done) => {
  gulp.watch([
    'pages/*.pug',
    'pages/assets/pug/**/*.pug',
    'pages/assets/blocks/**/*.pug',
  ], gulp.series('pug'));
  gulp.watch([
    'pages/*.!(pug)',
  ], gulp.series('copy:root'));
  gulp.watch([
    'pages/assets/fonts/*',
  ], gulp.series('copy:fonts'));
  gulp.watch([
    'pages/assets/sass/**/*.scss',
    'pages/assets/blocks/**/*.scss',
  ], gulp.series('sass'));
  return done();
});
