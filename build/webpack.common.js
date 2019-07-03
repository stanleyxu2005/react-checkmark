const path = require('path');

const rootDir = path.resolve(__dirname, '..');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(rootDir, 'src'), path.resolve(rootDir, 'examples/src')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react'],
            },
          },
          {
            loader: 'eslint-loader',
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
          },
        ],
      },
    ],
  },

  devtool: 'cheap-module-source-map',
};
