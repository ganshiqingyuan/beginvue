const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")
const testPlugin = require("./testplugin.js")

module.exports = {
  entry: {
      main:'./index.js'
    },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module:{
    rules:[{
      test: /\.js$/,
      use:[
        {
          loader:path.resolve("./testloader.js")
        }
      ]
    },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true
      }),
    new testPlugin()
  ]
}
