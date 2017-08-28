module.exports = ($) => {
  $.gulp.task('pug', () => $.gulp.src($.dir.pages('*.pug'))
    .pipe($.in.plumber())
    .pipe($.in.pug({
      data: {
        env: process.env,
      },
    }))
    .pipe($.gulp.dest($.dir.build())));
  if ($.isDev) {
    $.gulp.watch($.dir.pages('**/*.pug'), $.gulp.series('pug'));
  }
};
