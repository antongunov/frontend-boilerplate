const readdirSync = require('fs').readdirSync;
const lazyLoadTask = require('./lazy-load-task');

module.exports = (config) => {
  const loadTask = lazyLoadTask(config.tasksDir, config.options, config.plugins);
  readdirSync(config.tasksDir()).forEach((task) => {
    const name = task.slice(0, -'.js'.length);
    const options = { ...config.options, ...config.tasks[name] };
    loadTask(name, options);
  });
};
