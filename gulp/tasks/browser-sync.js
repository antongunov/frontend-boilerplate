const browserSync = require('browser-sync').create();

module.exports = (gulp, options) => {
  gulp.task(options.name('reload'), (done) => {
    browserSync.reload();
    return done();
  });
  return {
    run: (done) => {
      browserSync.init({
        server: options.server,
        open: false,
        ui: false,
        notify: false,
      }, done());
    },
    watch: () => {
      gulp.watch(options.watch, gulp.series(options.name('reload')));
    },
  };
};
