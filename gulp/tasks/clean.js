const del = require('del');

module.exports = (gulp, options) => {
  return {
    run: () => del.sync(options.dest),
  };
};
