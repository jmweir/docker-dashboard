var webpack = require('webpack');
var path    = require('path');
var config  = require('./webpack.common.config');

config.output = {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname)
};

config.entry.app = [
    'webpack-hot-middleware/client?reload=true'
].concat(config.entry.app);

config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
]);

module.exports = config;