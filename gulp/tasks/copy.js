const createCopyTask = (gulp, options) => (taskName, from, to) => {
  const taskFullname = `copy:${taskName}`;
  gulp.task(taskFullname, () => gulp.src(from, { since: gulp.lastRun(taskFullname) })
    .pipe(gulp.dest(to)));
  if (options.isDev) {
    gulp.watch(from, gulp.series(taskFullname));
  }
  return taskFullname;
};

module.exports = (gulp, options) => {
  const copyTask = createCopyTask(gulp, options);
  gulp.task('copy:assets', gulp.parallel(
    copyTask('public', options.dir.public('**/*'), options.dir.build()),
    copyTask('fonts', options.dir.assets('fonts/**/*'), options.dir.build('assets/fonts/'))
  ));
};
