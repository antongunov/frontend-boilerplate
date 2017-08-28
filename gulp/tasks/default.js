module.exports = (gulp, options) => {
  gulp.task('default', gulp.series(options.isDev ? 'dev' : 'build'));
};
