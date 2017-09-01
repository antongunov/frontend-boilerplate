module.exports = (gulp) => {
  return {
    run: gulp.series(
      'clean',
      gulp.parallel(
        'assets',
        'public'
      )
    ),
  };
};
