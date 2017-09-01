module.exports = (gulp) => {
  return {
    run: gulp.parallel(
      'fonts',
      'js',
      'pug',
      'sass'
    ),
  };
};
