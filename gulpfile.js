const loadTasks = require('./gulp/load-tasks');

// load sub-tasks
loadTasks([
  'browser-sync',
  'clean',
  'copy',
  'pug',
  'sass',
]);

// load main tasks
loadTasks([
  'build',
  'dev',
]);

// load root task
loadTasks('default');
