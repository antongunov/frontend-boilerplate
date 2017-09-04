const loadTasks = require('./gulp/load-tasks');

/**
 * Load environment variables from .env file.
 */
require('dotenv').config();

loadTasks({
  /**
   * Settings for load tasks.
   */
  tasksDir: 'gulp/tasks/',
  plugins: require('gulp-load-plugins')(),
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
  /**
   * Options for tasks.
   */
  tasks: {
    'browser-sync': {
      server: {
        baseDir: 'build/',
        index: 'home.html',
      },
      watch: 'build/**/*',
    },
    clean: {
      dest: 'build/',
    },
    fonts: {
      src: 'assets/fonts/**/*',
      dest: 'build/assets/fonts/',
      watch: 'assets/fonts/**/*',
    },
    public: {
      src: 'public/**/*',
      dest: 'build/',
      watch: 'public/**/*',
    },
  },
});
