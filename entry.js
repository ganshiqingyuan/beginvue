const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
      main:'./index.js'
    },
  devServer:{
      index:"index.html",
      publicPath: "/",
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins:[
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true
      }),
  ]
};
