const webpackConfig = require('./webpack.config.dev')

module.exports = (config) => {
  config.set({
    browsers: ['Chrome'], // run in Chrome
    singleRun: true, // just run once by default
    frameworks: ['mocha'], // use the mocha test framework
    files: ['./.karma-setup.js'], // just load this file
    preprocessors: {
       // preprocess with webpack and our sourcemap loader
      './.karma-setup.js': ['webpack', 'sourcemap'],
    },
    // report results in this format
    reporters: ['dots'],
    webpack: webpackConfig,
    webpackServer: {
      // please don't spam the console when running in karma!
      noInfo: true,
    },
  })
}
