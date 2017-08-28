const autoprefixer = require('autoprefixer');
const normalize = require('postcss-normalize');
const fontMagician = require('postcss-font-magician');

module.exports = (gulp, options, plugins) => {
  gulp.task('sass', () => gulp.src(options.dir.assets('sass/main.scss'))
    .pipe(plugins.plumber())
    .pipe(plugins.sass())
    .pipe(plugins.postcss([
      normalize(),
      fontMagician({
        hosted: [
          options.dir.assets('fonts/'),
        ],
      }),
      autoprefixer({
        cascade: false,
      }),
    ]))
    .pipe(gulp.dest(options.dir.build('assets/css/'))));
  if (options.isDev) {
    gulp.watch(options.dir.assets('sass/**/*.scss'), gulp.series('sass'));
  }
};
