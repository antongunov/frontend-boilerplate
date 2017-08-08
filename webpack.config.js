const resolve = require('path').resolve;
const fs = require('fs');
const webpack = require('webpack');

const context = resolve('pages/assets/js/');

const entries = (dir) => {
  const chunks = {};
  fs.readdirSync(dir)
    .filter(file => /\.js$/.test(file))
    .forEach((file) => {
      const name = file.slice(0, '.js'.length);
      chunks[name] = `./${file}`;
    });
  return chunks;
};

module.exports = {
  context,
  entry: entries(context),
  output: {
    filename: '[name].js',
    path: resolve('build/assets/js/'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: [context],
      use: [{
        loader: 'babel-loader',
      }],
    }],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
