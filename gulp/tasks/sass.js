const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const normalize = require('postcss-normalize');
const fontMagician = require('postcss-font-magician');
const plumber = require('gulp-plumber');

gulp.task('sass', done => gulp.src('assets/sass/main.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(postcss([
    normalize(),
    fontMagician({
      hosted: ['assets/fonts/'],
    }),
    autoprefixer({
      cascade: false,
    }),
  ]))
  .pipe(gulp.dest('build/assets/css/')));
