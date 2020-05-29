const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

const webpack = require('webpack');
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const rootDir = path.resolve(__dirname, '..');

module.exports = Merge(CommonConfig, {
  entry: {
    'react-checkmark': './src/checkmark.tsx',
    'react-checkmark.min': './src/checkmark.tsx',
  },

  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: '[name].jsx',
    sourceMapFilename: '[name].map',
    library: 'reactTypescriptCheckmark',
    libraryTarget: 'umd',
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
  ],

  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },

  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'react',
    },
  },
});
