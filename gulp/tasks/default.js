module.exports = (gulp, options) => {
  const task = gulp.series(options.isDev ? 'dev' : 'build');
  return {
    run: task,
  };
};
