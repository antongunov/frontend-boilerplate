module.exports = (gulp) => {
  const task = gulp.series(
    'clean',
    gulp.parallel(
      'fonts',
      'js',
      'public',
      'pug',
      'sass'
    ),
    gulp.parallel(
      'browser-sync'
    )
  );
  return {
    run: task,
  };
};
