const loadTasks = require('./gulp/load-tasks');
const loadPlugins = require('gulp-load-plugins');

/**
 * Load environment variables from .env file.
 */
require('dotenv').config();

loadTasks({
  /**
   * Settings to load tasks.
   */
  tasksDir: 'gulp/tasks/',
  plugins: loadPlugins(),
  /**
   * General options for all tasks.
   */
  options: {
    debug: true,
    live: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
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
    js: {
      src: 'assets/js/**/*.js',
      main: 'main.js',
      dest: 'build/assets/js/',
      watch: 'assets/js/**/*.js',
    },
    public: {
      src: 'public/**/*',
      dest: 'build/',
      watch: 'public/**/*',
    },
    pug: {
      src: 'pages/*.pug',
      data: {
        env: process.env,
      },
      dest: 'build/',
      watch: 'pages/**/*.pug',
    },
    sass: {
      src: 'assets/sass/main.scss',
      postcss: {
        autoprefixer: {
          cascade: false,
        },
        cssnano: {
          preset: 'default',
        },
        fontMagician: {
          hosted: [
            'assets/fonts/',
          ],
        },
      },
      dest: 'build/assets/css/',
      watch: 'assets/sass/**/*.{scss,css}',
    },
  },
});
