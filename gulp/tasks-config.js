const path = require('path');

const joinDir = (rootDir) => {
  const resolveRootDir = path.resolve(rootDir);
  return (subDir) => {
    return subDir ? path.join(resolveRootDir, subDir) : path.join(resolveRootDir);
  };
};

module.exports = {
  dir: {
    assets: joinDir('assets'),
    build: joinDir('build'),
    pages: joinDir('pages'),
    public: joinDir('public'),
  },
  isDev: process.env.NODE_ENV === 'development',
};
