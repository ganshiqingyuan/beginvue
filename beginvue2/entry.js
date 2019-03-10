const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
  module:{
    rules:[
      {
        test: /\.vue$/,
        use:["vue-loader"]
      },
      {
        test:/\.css$/,
        use:["vue-style-loader","css-loader"]
      },
      {
        test:/\.js$/,
        use:["babel-loader"]
      }
    ],
  },
  plugins:[
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true
      }),
  ]
}
