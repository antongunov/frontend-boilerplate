const gulp = require('gulp');

const joinName = (mainName) => {
  return (subName) => {
    return subName ? `${mainName}:${subName}` : mainName;
  };
};

module.exports = (tasksDir, config, plugins) => {
  return (name, options) => {
    let task = null;
    gulp.task(name, (done) => {
      if (!task) {
        const taskConfig = Object.assign({}, config, options, { name: joinName(name) });
        task = require(tasksDir(name))(gulp, taskConfig, plugins);
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
