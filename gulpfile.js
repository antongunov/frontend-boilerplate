const $ = require('./gulp/config');

require('./gulp/tasks/browser-sync')($);
require('./gulp/tasks/clean')($);
require('./gulp/tasks/copy')($);
require('./gulp/tasks/pug')($);
require('./gulp/tasks/sass')($);

require('./gulp/tasks/build')($.gulp);
require('./gulp/tasks/dev')($.gulp);

if ($.isDev) {
  $.gulp.task('default', $.gulp.series('dev'));
}
