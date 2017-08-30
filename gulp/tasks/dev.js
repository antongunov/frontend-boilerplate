module.exports = (gulp) => {
  const task = gulp.series(
    'clean',
    gulp.parallel(
      'copy',
      'pug',
      'sass',
      'js'
    ),
    gulp.parallel(
      'browser-sync'
    )
  );
  return {
    run: task,
  };
};
