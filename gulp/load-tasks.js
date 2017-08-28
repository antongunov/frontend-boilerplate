const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const loadTask = (taskName, options) => {
  require(`./tasks/${taskName}`)(gulp, options, plugins);
};

module.exports = config => (taskNames) => {
  if (Array.isArray(taskNames)) {
    taskNames.forEach(taskName => loadTask(taskName, config));
  } else {
    loadTask(taskNames, config);
  }
};
