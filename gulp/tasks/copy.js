const copyTask = ($, taskName, from, to) => {
  $.gulp.task(taskName, () => $.gulp.src(from, { since: $.gulp.lastRun(taskName) })
    .pipe($.gulp.dest(to)));
  if ($.isDev) {
    $.gulp.watch(from, $.gulp.series(taskName));
  }
  return taskName;
};

module.exports = ($) => {
  $.gulp.task('copy:assets', $.gulp.parallel(
    copyTask($, 'copy:public', $.dir.public('**/*'), $.dir.build()),
    copyTask($, 'copy:fonts', $.dir.assets('fonts/**/*'), $.dir.build('assets/fonts/'))
  ));
};
