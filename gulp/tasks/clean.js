const del = require('del');

module.exports = (gulp, options) => {
  const task = done => del(options.dir.build(), done);
  return {
    run: task,
  };
};
