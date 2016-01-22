React component boilerplate
=====================

This sets up the dev environment which allows you to focus on developing your reusable [React](https://github.com/facebook/react) component.


## Features
* Support ES6 syntax by using [Babel6](http://babeljs.io/)
* Hot reload React modules with [react-transform-hmr](https://github.com/gaearon/react-transform-hmr) and [react-transform-catch-errors](https://github.com/gaearon/react-transform-catch-errors). If you are only interested in hot reloading, check this repo out (https://github.com/gaearon/react-transform-boilerplate) 
* [Webpack](https://webpack.github.io/) for bundling assets
* Use [ESlint](http://eslint.org/) for js linting
* Use [Karma](https://github.com/karma-runner/karma) + [Jasmine](https://github.com/jasmine/jasmine) for unit testing


## Usage

### Run the example

```
npm install
npm start
open http://localhost:3000
```

#### Start the example on a different port

```
PORT=5000 npm start
```

### Linting

```
npm run lint
```

### Testing

```
npm run test (Runs tests once)
npm run testDev (Runs tests in watch mode)
```

### To generate distribution code

```
npm run build
```

### License
MIT
