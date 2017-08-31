const dotenv = require('dotenv');

// load environment variables
dotenv.config();

const lazyLoadTask = require('./gulp/lazy-load-task')(require('./gulp/config'));

// load sub-tasks
lazyLoadTask('browser-sync');
lazyLoadTask('clean');
lazyLoadTask('fonts');
lazyLoadTask('public');
lazyLoadTask('pug');
lazyLoadTask('sass');
lazyLoadTask('js');

// load main tasks
lazyLoadTask('build');
lazyLoadTask('dev');

// load root task
lazyLoadTask('default');
