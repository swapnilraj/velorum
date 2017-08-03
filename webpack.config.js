/**
 * Webpack configuration to build the project
 */

'use strict';

const { join } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpack = require('webpack');
const buildFolder = join(__dirname, 'build');

module.exports = {
  entry: {
    'content': './js/content.js',
  },
  output: {
    path: buildFolder,
    filename: '[name].js',
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './icons/', to: `${buildFolder}/icons/` },
    ])
  ],
  devtool: 'source-map',
  resolve: {
      extensions: ['.webpack.js', '.web.js', '.js', '.json']
  },
  module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      ]
  }
};