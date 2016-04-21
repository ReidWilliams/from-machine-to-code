module.exports = {
  entry: './scripts/index.js',
  output: {
    filename: './src/bundle.js'
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
