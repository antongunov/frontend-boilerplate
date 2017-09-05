module.exports = (gulp, options, plugins) => {
  return {
    run: () => {
      gulp.src(options.src)
        .pipe(plugins.newer(options.dest))
        .pipe(plugins.if(options.debug, plugins.debug({ title: `${options.name()}:` })))
        .pipe(gulp.dest(options.dest));
    },
    watch: () => {
      gulp.watch(options.watch, gulp.series(options.name()));
    },
  };
};
