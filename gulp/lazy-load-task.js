const gulp = require('gulp');
const resolve = require('path').resolve;

const joinName = (mainName) => {
  return (subName) => {
    return subName ? `${mainName}:${subName}` : mainName;
  };
};

module.exports = (config, plugins) => {
  return (name, options) => {
    let task = null;
    gulp.task(name, (done) => {
      if (!task) {
        const taskConfig = Object.assign({}, config, options, { name: joinName(name) });
        task = require(resolve(`gulp/tasks/${name}`))(gulp, taskConfig, plugins);
        task.run(done);
        if (config.live && task.watch) {
          task.watch();
        }
      } else {
        task.run(done);
      }
      return done();
    });
  };
};
