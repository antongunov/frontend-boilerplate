const gulp = require('gulp');
const webpack = require('webpack');
const config = require('../../webpack.config');
const { log, colors } = require('gulp-util');

const compiler = webpack(config);

const handler = done => (err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return done();
  }

  const info = stats.toJson({
    assets: false,
  });

  info.modules.forEach((module) => {
    const status = [];
      // https://github.com/webpack/webpack/blob/1769fa2d95872bc69a4c38c97b029278796b062a/lib/Stats.js#L608
    if (module.built) {
      status.push(colors.green('[built]'));
    }
    if (module.failed) {
      status.push(colors.red.bold('[failed]'));
    }
    if (module.warnings) {
      status.push(colors.yellow(`[${module.warnings} warning${module.warnings === 1 ? '' : 's'}]`));
    }
    if (module.errors) {
      status.push(colors.red(`[${module.errors} error${module.errors === 1 ? '' : 's'}]`));
    }
    if (status.length > 0) {
      log(`[${colors.blue('webpack')}] process module ${colors.magenta(module.name)} ${status.join(' ')}`);
    }
  });

  if (info.warnings) {
    info.warnings.forEach((warning) => {
      console.warn(`\nWARNING in ${warning}\n`);
    });
  }

  if (info.errors) {
    info.errors.forEach((error) => {
      console.error(`\nERROR in ${error}\n`);
    });
  }

  return done();
};

/**
 * Gulp tasks
 */

gulp.task('webpack:run', (done) => {
  compiler.run(handler(done));
});

gulp.task('webpack:watch', (done) => {
  compiler.watch({
    aggregateTimeout: 100,
    poll: 1000,
  }, handler(done));
});
