const $ = require('./gulp/config');

/**
 * Load environment variables
 */

require('dotenv').config();

/**
 * Sub-tasks
 */

require('./gulp/tasks/browser-sync')($);
require('./gulp/tasks/clean')($);
require('./gulp/tasks/copy')($);
require('./gulp/tasks/pug')($);
require('./gulp/tasks/sass')($);

/**
 * Main tasks
 */

require('./gulp/tasks/default');
