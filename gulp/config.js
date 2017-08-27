const path = require('path');

const joinDir = rootDir => subDir => subDir ? path.join(rootDir, subDir) : path.join(rootDir);

module.exports = {
  gulp: require('gulp'),
  in: {
    plumber: require('gulp-plumber'),
    postcss: require('gulp-postcss'),
    pug: require('gulp-pug'),
    sass: require('gulp-sass'),
  },
  dir: {
    assets: joinDir('assets/'),
    build: joinDir('build/'),
    pages: joinDir('pages/'),
  },
};
