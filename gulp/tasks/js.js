module.exports = (gulp, options, plugins) => {
  gulp.task('js', () => gulp.src(options.dir.assets('js/**/*.js'))
    .pipe(plugins.concat('main.js'))
    .pipe(plugins.if(!options.isDev, plugins.uglify()))
    .pipe(gulp.dest(options.dir.build('assets/js/'))));
  if (options.isDev) {
    gulp.watch(options.dir.assets('js/**/*.js'), gulp.series('js'));
  }
};
