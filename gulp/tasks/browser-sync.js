const browserSync = require('browser-sync').create();

module.exports = (gulp, options) => {
  gulp.task(options.name('reload'), (done) => {
    browserSync.reload();
    return done();
  });
  const task = (done) => {
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
  };
  return {
    run: task,
    watch: () => gulp.watch(options.dir.build('**/*'), gulp.series(options.name('reload'))),
  };
};
