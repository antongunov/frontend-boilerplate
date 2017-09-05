module.exports = (gulp, options, plugins) => {
  return {
    run: () => {
      gulp.src(options.src)
        .pipe(plugins.if(options.isDebug, plugins.debug({ title: `${options.name()}:` })))
        .pipe(plugins.if(options.isDev, plugins.sourcemaps.init()))
          .pipe(plugins.babel())
          .pipe(plugins.concat(options.main))
        .pipe(plugins.if(options.isDev, plugins.sourcemaps.write()))
        .pipe(plugins.if(!options.isDev, plugins.uglify()))
        .pipe(gulp.dest(options.dest));
    },
    watch: () => {
      gulp.watch(options.watch, gulp.series(options.name()));
    },
  };
};
