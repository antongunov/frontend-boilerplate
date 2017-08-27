const path = require('path');
const rimraf = require('rimraf');

module.exports = ($) => {
  $.gulp.task('clean', (done) => {
    const from = $.dir.build('*');
    const cwd = process.cwd();
    const absFrom = path.join(cwd, from);

    if (path.relative(from, absFrom)) {
      return done(new Error(`Cleaning outside the project directory '${cwd}' is not allowed`));
    }
    return rimraf(absFrom, done);
  });
};
