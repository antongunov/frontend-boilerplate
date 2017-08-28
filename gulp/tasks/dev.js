module.exports = (gulp) => {
  gulp.task('dev', gulp.series(
    'clean',
    gulp.parallel(
      'copy:assets',
      'pug',
      'sass'
    ),
    gulp.parallel(
      'browser-sync:init'
    )
  ));
};
