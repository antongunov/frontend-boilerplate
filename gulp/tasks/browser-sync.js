const browserSync = require('browser-sync').create();

module.exports = (gulp, options) => {
  gulp.task('browser-sync:reload', (done) => {
    browserSync.reload();
    return done();
  });
  gulp.task('browser-sync:init', (done) => {
    browserSync.init({
      server: {
        baseDir: options.dir.build(),
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

    gulp.watch([
      options.dir.build('**/*'),
    ], gulp.series('browser-sync:reload'));
  });
};
