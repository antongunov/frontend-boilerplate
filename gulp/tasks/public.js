module.exports = (gulp, options) => {
  return {
    run: () => {
      gulp.src(options.dir.public('**/*'), { since: gulp.lastRun(options.name()) })
        .pipe(gulp.dest(options.dir.build()));
    },
    watch: () => {
      gulp.watch(options.dir.public('**/*'), gulp.series(options.name()));
    },
  };
};
