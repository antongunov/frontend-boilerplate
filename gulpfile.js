const dotenv = require('dotenv');
const loadTasks = require('./gulp/load-tasks');

// load environment variables
dotenv.config();

loadTasks({
  /**
   * General options for all tasks.
   */
  options: {
    dir: {
      assets: 'assets/',
      build: 'build/',
      pages: 'pages/',
      public: 'public/',
    },
    isDev: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
  },
});
