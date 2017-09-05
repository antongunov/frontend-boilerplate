const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const fontMagician = require('postcss-font-magician');
const normalize = require('postcss-normalize');

module.exports = (options, live) => {
  const plugins = [
    normalize(),
    fontMagician(options.fontMagician),
    autoprefixer(options.autoprefixer),
  ];
  if (!live) {
    plugins.push(cssnano(options.cssnano));
  }
  return plugins;
};
