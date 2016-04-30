'use strict'

var path = require('path');

module.exports = {
  entry: './scripts/index.js',
  output: {
    path: path.join(__dirname, '/dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  }
};
