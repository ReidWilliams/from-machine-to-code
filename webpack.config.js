const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');

module.exports = (env) => {
  console.log(env);
  mode = env.mode;
  return {
    mode,
    entry: {
      main: './src/index.js',
    },
    devtool: mode == 'development' ? 'cheap-module-eval-source-map' : 'none',
    devServer: {
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
        {
          test: /\.woff2$/,
          use: ['url-loader'],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Tiny Machines',
        // favicon: './src/img/favicon.ico',
        template: 'templates/index.ejs',
        filename: 'index.html',
        excludeChunks: ['server'],
      }),
      new CopyWebpackPlugin([
        {
          context: 'node_modules/@webcomponents/webcomponentsjs',
          from: '**/*.js',
          to: 'polyfills/webcomponents',
        },
      ]),
      new ManifestPlugin(),
    ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
    },
  };
};
