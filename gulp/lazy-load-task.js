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
        const taskConfig = { ...config, ...options, name: joinName(name) };
        task = require(tasksDir(name))(gulp, taskConfig, plugins);
        if (config.live && task.watch) {
          task.watch();
        }
      }
      task.run(done);
      return done();
    });
  };
};
