module.exports = (gulp, options) => {
  return {
    run: gulp.series(options.isDev ? 'dev' : 'build'),
  };
};
