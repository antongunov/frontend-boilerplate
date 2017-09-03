const gulp = require('gulp');
const path = require('path');

const joinDir = (rootDir) => {
  const resolveRootDir = path.resolve(rootDir);
  return (subDir) => {
    return subDir ? path.join(resolveRootDir, subDir) : path.join(resolveRootDir);
  };
};

const updateConfig = (config) => {
  const updConfig = config;
  if (config.dir) {
    Object.keys(config.dir).forEach((key) => {
      updConfig.dir[key] = joinDir(config.dir[key]);
    });
  }
  return updConfig;
};

const tasksDir = joinDir('gulp/tasks/');

const joinName = mainName => subName => {
  return subName ? `${mainName}:${subName}` : mainName;
};

module.exports = (config, plugins) => {
  const updConfig = updateConfig(config);
  return (name) => {
    let task = null;
    gulp.task(name, (done) => {
      if (!task) {
        const taskConfig = Object.assign(updConfig, { name: joinName(name) });
        task = require(tasksDir(name))(gulp, taskConfig, plugins);
        task.run(done);
        if (config.isDev && task.watch) {
          task.watch();
        }
      } else {
        task.run(done);
      }
      return done();
    });
  };
};
