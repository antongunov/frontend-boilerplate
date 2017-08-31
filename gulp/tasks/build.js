module.exports = (gulp) => {
  const task = gulp.series(
    'clean',
    gulp.parallel(
      'fonts',
      'js',
      'public',
      'pug',
      'sass'
    )
  );
  return {
    run: task,
  };
};
