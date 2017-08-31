module.exports = (gulp, options) => {
  return {
    run: () => {
      gulp.src(options.dir.assets('fonts/**/*'), { since: gulp.lastRun(options.name()) })
        .pipe(gulp.dest(options.dir.build('assets/fonts/')));
    },
    watch: () => {
      gulp.watch(options.dir.assets('fonts/**/*'), gulp.series(options.name()));
    },
  };
};
