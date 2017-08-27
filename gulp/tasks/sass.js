const autoprefixer = require('autoprefixer');
const normalize = require('postcss-normalize');
const fontMagician = require('postcss-font-magician');

module.exports = ($) => {
  $.gulp.task('sass', done => $.gulp.src($.dir.assets('sass/main.scss'))
    .pipe($.in.plumber())
    .pipe($.in.sass())
    .pipe($.in.postcss([
      normalize(),
      fontMagician({
        hosted: [
          $.dir.assets('fonts/'),
        ],
      }),
      autoprefixer({
        cascade: false,
      }),
    ]))
    .pipe($.gulp.dest($.dir.build('assets/css/'))));
};
