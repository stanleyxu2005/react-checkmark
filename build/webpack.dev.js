const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

const path = require('path');
const publicPath = '/build/';

const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = Merge(CommonConfig, {
  mode: 'development',

  entry: {
    vendor: ['react', 'react-dom'],
    app: './examples/src/example.js',
  },

  output: {
    path: path.join(__dirname, '../examples/build'),
    filename: '[name].bundle.js',
    publicPath: publicPath,
    sourceMapFilename: '[name].map',
  },

  resolve: {
    alias: {
      src: path.resolve(__dirname, '..', 'src'),
    },
  },

  optimization: {
    minimize: false,
  },

  plugins: [
    new CleanWebpackPlugin(['./examples/build']),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //
    //   // filename: "vendor.js"
    //   // (Give the chunk a different name)
    //
    //   minChunks: Infinity,
    //   // (with more entries, this ensures that no other module
    //   //  goes into the vendor chunk)
    // }),
  ],

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
