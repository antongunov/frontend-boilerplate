module.exports = (gulp) => {
  const task = gulp.series(
    'clean',
    gulp.parallel(
      'copy',
      'pug',
      'sass',
      'js'
    )
  );
  return {
    run: task,
  };
};
