const webpack = require('webpack');
const options = require('./entry.js');

const compiler = webpack(options,function(){
    console.log("执行run")
});
