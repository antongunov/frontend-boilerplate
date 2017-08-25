const gulp = require('gulp');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');

gulp.task('pug', done => gulp.src('pages/*.pug')
  .pipe(plumber())
  .pipe(pug({
    data: {
      env: process.env,
    },
  }))
  .pipe(gulp.dest('build/')));
