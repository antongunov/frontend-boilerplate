const loadTasks = require('./gulp/load-tasks');
const loadPlugins = require('gulp-load-plugins');
const resolve = require('path').resolve;

const joinDir = (mainDir) => {
  return (subDir) => {
    return subDir ? resolve(mainDir, subDir) : resolve(mainDir);
  };
};

/**
 * Resolve main directories.
 */
const assetsDir = joinDir('assets');
const buildDir = joinDir('build');
const publicDir = joinDir('public');
const pagesDir = joinDir('pages');

/**
 * Load environment variables from .env file.
 */
require('dotenv').config();

loadTasks({
  /**
   * Settings to load tasks.
   */
  tasksDir: joinDir('gulp/tasks/'),
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
        baseDir: buildDir(),
        index: 'home.html',
      },
      watch: buildDir('**/*'),
    },
    clean: {
      dest: buildDir(),
    },
    fonts: {
      src: assetsDir('fonts/**/*'),
      dest: buildDir('assets/fonts/'),
      watch: assetsDir('fonts/**/*'),
    },
    js: {
      src: assetsDir('js/**/*.{js,json}'),
      main: 'main.js',
      dest: buildDir('assets/js/'),
      watch: assetsDir('js/**/*.{js,json}'),
    },
    public: {
      src: publicDir('**/*'),
      dest: buildDir(),
      watch: publicDir('**/*'),
    },
    pug: {
      src: pagesDir('*.pug'),
      data: {
        env: process.env,
      },
      dest: buildDir(),
      watch: pagesDir('**/*.pug'),
    },
    sass: {
      src: assetsDir('sass/main.scss'),
      postcss: {
        autoprefixer: {
          cascade: false,
        },
        cssnano: {
          preset: 'default',
        },
        fontMagician: {
          hosted: [
            assetsDir('fonts/'),
          ],
        },
      },
      dest: buildDir('assets/css/'),
      watch: assetsDir('sass/**/*.{scss,css}'),
    },
  },
});
