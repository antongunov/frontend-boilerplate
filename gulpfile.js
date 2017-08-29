const dotenv = require('dotenv');

// load environment variables
dotenv.config();

const tasksConfig = require('./gulp/tasks-config');
const loadTasks = require('./gulp/load-tasks')(tasksConfig);

// load sub-tasks
loadTasks([
  'browser-sync',
  'clean',
  'copy',
  'pug',
  'sass',
  'js',
]);

// load main tasks
loadTasks([
  'build',
  'dev',
]);

// load root task
loadTasks('default');
