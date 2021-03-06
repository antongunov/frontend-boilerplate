module.exports = (gulp, options, plugins) => {
  return {
    run: () => {
      gulp.src(options.src)
        .pipe(plugins.if(options.debug, plugins.debug({ title: `${options.name()}:` })))
        .pipe(plugins.if(options.live, plugins.sourcemaps.init()))
          .pipe(plugins.babel())
          .pipe(plugins.concat(options.main))
        .pipe(plugins.if(options.live, plugins.sourcemaps.write()))
        .pipe(plugins.if(!options.live, plugins.uglify()))
        .pipe(gulp.dest(options.dest));
    },
    watch: () => {
      gulp.watch(options.watch, gulp.series(options.name()));
    },
  };
};
