const readdirSync = require('fs').readdirSync;
const lazyLoadTask = require('./lazy-load-task');

module.exports = (config) => {
  const loadTask = lazyLoadTask(config.options, config.plugins);
  readdirSync(config.tasksDir).forEach(task => loadTask(task.slice(0, -'.js'.length)));
};
