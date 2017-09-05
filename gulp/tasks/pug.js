module.exports = (gulp, options, plugins) => {
  return {
    run: () => {
      gulp.src(options.src)
        .pipe(plugins.plumber())
        .pipe(plugins.if(options.isDebug, plugins.debug({ title: `${options.name()}:` })))
        .pipe(plugins.pug({
          data: options.data,
        }))
        .pipe(gulp.dest(options.dest));
    },
    watch: () => {
      gulp.watch(options.watch, gulp.series(options.name()));
    },
  };
};
