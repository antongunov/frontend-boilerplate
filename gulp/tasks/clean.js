const del = require('del');

module.exports = (gulp, options) => {
  gulp.task('clean', done => del(options.dir.build('*'), done));
};
