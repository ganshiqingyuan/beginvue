const webpack = require('webpack');
const options = require('./entry.js');

const compiler = webpack(options);

compiler.run((...args) => {
    console.log(...args);
});