module.exports = (gulp, options, plugins) => {
  return {
    run: () => {
      return gulp.src(options.src)
        .pipe(plugins.newer(options.dest))
        .pipe(plugins.if(options.isDebug, plugins.debug({ title: `${options.name()}:` })))
        .pipe(gulp.dest(options.dest));
    },
    watch: () => {
      return gulp.watch(options.watch, gulp.series(options.name()));
    },
  };
};
