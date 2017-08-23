const gulp = require('gulp');

/**
 * Gulp tasks
 */

gulp.task('copy:root', () => gulp.src('pages/*.!(pug)', { since: gulp.lastRun('copy:root') })
    .pipe(gulp.dest('build/')));

gulp.task('copy:fonts', () => gulp.src('assets/fonts/*', { since: gulp.lastRun('copy:fonts') })
    .pipe(gulp.dest('build/assets/fonts/')));

gulp.task('copy:assets', gulp.parallel(
  'copy:root',
  'copy:fonts'
));
