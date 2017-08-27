const copyTaskNames = [];

const createCopyTask = ($, subName, from, to) => {
  const name = `copy:${subName}`;
  $.gulp.task(name, (done) => {
    $.gulp.src($.dir.pages(from), { since: $.gulp.lastRun(name) })
      .pipe($.gulp.dest($.dir.build(to)));
    return done();
  });
  copyTaskNames.push(name);
};

module.exports = ($) => {
  createCopyTask($, 'root', '*.!(pug)', '/');
  createCopyTask($, 'fonts', 'fonts/*', 'assets/fonts/');
  $.gulp.task('copy:assets', $.gulp.parallel(copyTaskNames));
};
