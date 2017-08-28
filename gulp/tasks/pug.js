module.exports = (gulp, options, plugins) => {
  gulp.task('pug', () => gulp.src(options.dir.pages('*.pug'))
    .pipe(plugins.plumber())
    .pipe(plugins.pug({
      data: {
        env: process.env,
      },
    }))
    .pipe(gulp.dest(options.dir.build())));
  if (options.isDev) {
    gulp.watch(options.dir.pages('**/*.pug'), gulp.series('pug'));
  }
};
