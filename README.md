# Frontend Boilerplate [![license](https://img.shields.io/dub/l/vibe-d.svg?style=flat-square)](LICENSE)

Frontend boilerplate for prototyping web pages using Gulp, PostCSS, Pug and SASS.

## How to Install

```bash
# clone this repository
git clone https://github.com/antongunov/frontend-boilerplate.git

cd frontend-boilerplate

# install dependencies
npm install

# copy .env.example to .env and set your settings 
cp .env.example .env

# run for developing
npm run dev

# build for production
npm run build

# run for serving in production mode
npm start
```

## Gulp Tasks

All Gulp tasks are independent.

### Example Task

```js
module.exports = (gulp, options, plugins) => {
  return {
    run: (done) => {
      return done();
    },
    watch: () => {
      gulp.watch(options.watch, gulp.series(options.name()));
    },
  };
};
```

## License

The code is available under the [MIT License](LICENSE).
