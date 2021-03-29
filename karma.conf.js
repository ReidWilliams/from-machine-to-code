module.exports = (conf) => {
  conf.set({
    browsers: ['Firefox'],
    // single entry point. performant, but all files must run.
    // TODO setup a single-test-able run later
    files: [
      { pattern: 'test.webpack.js', watched: false }
    ],
    frameworks: ['jasmine'],
    preprocessors: { 'test.webpack.js': [ 'webpack', 'sourcemap' ] },
    reporters: ['mocha'],
    singleRun: true, // set this to false to get a firefox session for debugging
    webpack: {
      mode: 'development', // so that we have source maps
      watch: false
    },
    webpackServer: {
      noInfo: true
    }
  });
}
