# react-native-component-boilerplate

> A boilerplate to create React Native components.

## Features

1. [mocha](https://mochajs.org/) to allow writing unit tests for the project
1. [enzyme](http://airbnb.io/enzyme/index.html) for testing
1. [travis](https://travis-ci.org/) as CI
1. [istanbul](https://github.com/gotwarlost/istanbul) for code coverage (ES2015)
1. [codecov.io](https://codecov.io) for code-coverage reporting
1. Scripts written for building components(ES5)
1. [semantic-release](https://github.com/semantic-release/semantic-release) for automated releases following semantic versioning
1. [commitizen](https://github.com/commitizen/cz-cli) and [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog) for better commit messages.
1. [Prettier](https://github.com/prettier/prettier-eslint-cli) as a precommit hook.

### Scripts

1. `npm run lint` : Lint all js files
1. `npm run lintfix` : fix linting errors of all js files
1. `npm run semantic-release` : make a release. Leave it for CI to do.
1. `npm run test` : Run tests. tests file should be written as `*.test.js` and using ES2015
1. `npm run test:watch` : Watch tests while writing
1. `npm run test:cover` : Show coverage report of your tests
1. `npm run test:report` : Report test coverage to codecov.io. Leave this for CI
1. `npm run format`: Run prettier on all JS files

### License
MIT @ Ritesh Kumar