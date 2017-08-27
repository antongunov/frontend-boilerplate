module.exports = ($) => {
  $.gulp.task('pug', done => $.gulp.src($.dir.pages('*.pug'))
    .pipe($.in.plumber())
    .pipe($.in.pug({
      data: {
        env: process.env,
      },
    }))
    .pipe($.gulp.dest($.dir.build())));
};
