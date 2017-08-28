const dotenv = require('dotenv');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const path = require('path');

// load environment variables
dotenv.config();

const joinDir = (rootDir) => {
  const resolveRootDir = path.resolve(rootDir);
  return (subDir) => {
    return subDir ? path.join(resolveRootDir, subDir) : path.join(resolveRootDir);
  };
};

const options = {
  dir: {
    assets: joinDir('assets/'),
    build: joinDir('build/'),
    pages: joinDir('pages/'),
    public: joinDir('public/'),
  },
  isDev: process.env.NODE_ENV === 'development',
};

const loadTask = (taskName) => {
  require(`./tasks/${taskName}`)(gulp, options, plugins);
};

module.exports = (taskNames) => {
  if (Array.isArray(taskNames)) {
    taskNames.forEach(taskName => loadTask(taskName));
  } else {
    loadTask(taskNames);
  }
};
