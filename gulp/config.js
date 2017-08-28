const dotenv = require('dotenv');
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const path = require('path');

const joinDir = rootDir => subDir => subDir ? path.join(rootDir, subDir) : path.join(rootDir);

// load environment variables
dotenv.config();

module.exports = {
  dir: {
    assets: joinDir('assets/'),
    build: joinDir('build/'),
    pages: joinDir('pages/'),
    public: joinDir('public/'),
  },
  gulp,
  in: gulpLoadPlugins(),
  isDev: process.env.NODE_ENV === 'development',
};
