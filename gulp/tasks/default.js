module.exports = (gulp, options) => {
  return {
    run: gulp.series(options.live ? 'dev' : 'build'),
  };
};
