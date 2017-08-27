module.exports = ($) => {
  $.gulp.task('copy:root', () => $.gulp.src($.dir.pages('*.!(pug)'), { since: $.gulp.lastRun('copy:root') })
    .pipe($.gulp.dest($.dir.build())));
  $.gulp.task('copy:fonts', () => $.gulp.src($.dir.assets('fonts/*'), { since: $.gulp.lastRun('copy:fonts') })
    .pipe($.gulp.dest($.dir.build('assets/fonts/'))));
  $.gulp.task('copy:assets', $.gulp.parallel(
    'copy:root',
    'copy:fonts'
  ));
}
