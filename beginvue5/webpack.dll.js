const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require("webpack")

module.exports = {
  entry: {
      vendor:[
          "vue",
          "vue-router"
      ]
    },
  output: {
    path: path.resolve(__dirname, 'static/js'),
    filename: '[name].dll.js',
    library:'[name]'
  },
  module:{
    rules:[
      {
        test: /\.vue$/,
        use:["vue-loader"]
      },
      {
        test:/\.js$/,
        use:["babel-loader"]
      },

    ],
  },
  plugins:[
    new VueLoaderPlugin(),
    new webpack.DllPlugin({
        path: path.join(__dirname, 'static/js', '[name]-manifest.json'),
        name:"[name]"
      })
  
  ]
}
