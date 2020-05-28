const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

const webpack = require('webpack');
const path = require('path');
const publicPath = '/build/';

const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = Merge(CommonConfig, {
  entry: {
    vendor: ['react', 'react-dom'],
    app: './examples/src/example.tsx',
  },

  output: {
    path: path.join(__dirname, 'examples/build'),
    filename: '[name].bundle.js',
    publicPath: publicPath,
    sourceMapFilename: '[name].map',
  },

  plugins: [new CleanWebpackPlugin(['./examples/build'])],

  devServer: {
    port: 8000,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    publicPath: publicPath,
    contentBase: './examples',
  },
});
