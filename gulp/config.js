module.exports = {
  dir: {
    assets: 'assets/',
    build: 'build/',
    pages: 'pages/',
    public: 'public/',
  },
  isDev: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
};
