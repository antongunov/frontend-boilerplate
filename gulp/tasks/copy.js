const createCopyTask = (gulp, options) => (name, from, to) => {
  gulp.task(name, () => gulp.src(from, { since: gulp.lastRun(name) })
    .pipe(gulp.dest(to)));
  if (options.isDev) {
    gulp.watch(from, gulp.series(name));
  }
  return name;
};

module.exports = (gulp, options) => {
  const copyTask = createCopyTask(gulp, options);
  const task = gulp.parallel(
    copyTask(options.name('public'), options.dir.public('**/*'), options.dir.build()),
    copyTask(options.name('fonts'), options.dir.assets('fonts/**/*'), options.dir.build('assets/fonts/'))
  );
  return {
    run: task,
  };
};
