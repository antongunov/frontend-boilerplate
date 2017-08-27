const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const path = require('path');

const joinDir = rootDir => subDir => subDir ? path.join(rootDir, subDir) : path.join(rootDir);

module.exports = {
  gulp,
  in: gulpLoadPlugins(),
  dir: {
    assets: joinDir('assets/'),
    build: joinDir('build/'),
    pages: joinDir('pages/'),
  },
};
