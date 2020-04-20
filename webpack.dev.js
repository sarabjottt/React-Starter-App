const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    contentBase: './dist',
    hot: true,
    openPage: 'http://localhost:9000/',
  },
  module: {
    rules: [],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
