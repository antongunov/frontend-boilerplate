const browserSync = require('browser-sync').create();

module.exports = ($) => {
  $.gulp.task('browser-sync:reload', (done) => {
    browserSync.reload();
    return done();
  });
  $.gulp.task('browser-sync:init', (done) => {
    browserSync.init({
      server: {
        baseDir: $.dir.build(),
        index: 'home.html',
        serveStaticOptions: {
          extensions: [
            'html',
          ],
        },
      },
      open: false,
      ui: false,
      notify: false,
    }, done());

    $.gulp.watch([
      $.dir.build('**/*'),
    ], $.gulp.series('browser-sync:reload'));
  });
};
