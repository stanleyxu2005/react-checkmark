const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

const webpack = require('webpack');
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const rootDir = path.resolve(__dirname, '..');

module.exports = Merge(CommonConfig, {
  entry: {
    'react-checkmark': './src/checkmark.js',
    'react-checkmark.min': './src/checkmark.js',
  },

  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    library: 'reactCheckmark',
    libraryTarget: 'umd',
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true,
      },
      comments: false,
    }),
  ],

  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'react',
    },
    'prop-types': {
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      amd: 'prop-types',
      root: 'prop-types',
    },
  },
});
