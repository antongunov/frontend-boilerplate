module.exports = (gulp) => {
  gulp.task('build', gulp.series(
    'clean',
    gulp.parallel(
      'copy:assets',
      'pug',
      'sass',
      'js'
    )
  ));
};
