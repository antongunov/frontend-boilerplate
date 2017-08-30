module.exports = (gulp, options, plugins) => {
  const task = () => gulp.src(options.dir.pages('*.pug'))
    .pipe(plugins.plumber())
    .pipe(plugins.pug({
      data: {
        env: process.env,
      },
    }))
    .pipe(gulp.dest(options.dir.build()));
  return {
    run: task,
    watch: () => gulp.watch(options.dir.pages('**/*.pug'), gulp.series(options.name())),
  };
};
