# Gulp Boilerplate

Boilerplate for prototyping web pages using Gulp, PostCSS, Pug and SASS.

## How to Install

Clone this repository and install dependencies:

```bash
$ git clone https://github.com/antongunov/gulp-boilerplate.git
$ cd gulp-boilerplate
$ npm install
```

Copy `.env.example` to `.env` and set your settings.

Run `npm run dev` for developing or `npm run build` for production.

## Tasks

All tasks are independent.

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
