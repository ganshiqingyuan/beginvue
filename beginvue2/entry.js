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
      }
    ],
  },
  resolve:{
    alias:{
      'vue':"vue/dist/vue.esm.js"
    }
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
