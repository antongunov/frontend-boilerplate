module.exports = (gulp, options, plugins) => {
  const task = () => gulp.src(options.dir.assets('js/**/*.js'))
    .pipe(plugins.if(options.isDev, plugins.sourcemaps.init()))
      .pipe(plugins.babel())
      .pipe(plugins.concat('main.js'))
    .pipe(plugins.if(options.isDev, plugins.sourcemaps.write()))
    .pipe(plugins.if(!options.isDev, plugins.uglify()))
    .pipe(gulp.dest(options.dir.build('assets/js/')));
  return {
    run: task,
    watch: () => gulp.watch(options.dir.assets('js/**/*.js'), gulp.series(options.name())),
  };
};
