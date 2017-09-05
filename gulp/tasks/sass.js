const postcssPlugins = require('../postcss-plugins');

module.exports = (gulp, options, plugins) => {
  return {
    run: () => {
      gulp.src(options.src)
        .pipe(plugins.plumber())
        .pipe(plugins.if(options.isDebug, plugins.debug({ title: `${options.name()}:` })))
        .pipe(plugins.if(options.isDev, plugins.sourcemaps.init()))
          .pipe(plugins.sass())
          .pipe(plugins.postcss(postcssPlugins(options.postcss, options.isDev)))
        .pipe(plugins.if(options.isDev, plugins.sourcemaps.write()))
        .pipe(gulp.dest(options.dest));
    },
    watch: () => {
      gulp.watch(options.watch, gulp.series(options.name()));
    },
  };
};
