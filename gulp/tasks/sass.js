const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const fontMagician = require('postcss-font-magician');
const normalize = require('postcss-normalize');

module.exports = (gulp, options, plugins) => {
  const postcssPlugins = [
    normalize(),
    fontMagician({
      hosted: [
        options.dir.assets('fonts/'),
      ],
    }),
    autoprefixer({
      cascade: false,
    }),
  ];

  if (!options.isDev) {
    postcssPlugins.push(cssnano({
      preset: 'default',
    }));
  }

  gulp.task('sass', () => gulp.src(options.dir.assets('sass/main.scss'))
    .pipe(plugins.plumber())
    .pipe(plugins.if(options.isDev, plugins.sourcemaps.init()))
      .pipe(plugins.sass())
      .pipe(plugins.postcss(postcssPlugins))
    .pipe(plugins.if(options.isDev, plugins.sourcemaps.write()))
    .pipe(gulp.dest(options.dir.build('assets/css/'))));
  if (options.isDev) {
    gulp.watch(options.dir.assets('sass/**/*.scss'), gulp.series('sass'));
  }
};
