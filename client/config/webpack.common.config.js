var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var root = require('./utils').root;

module.exports = {
    devtool: 'source-map',
    entry: {
        'app': root('app.js')
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: [/node_modules/], use: ['ng-annotate-loader', 'babel-loader']},
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.(ttf|eot|woff2?|svg)$/, use: 'file-loader?name=fonts/[name].[hash].[ext]'},
            { test: /\.(png|jpe?g|gif|ico)$/, use: 'file-loader?name=images/[name].[hash].[ext]'},
            { test: /\.html$/, use: [{
                loader: 'html-loader',
                options: {
                    minimize: false
                }
            }]},
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),

        new HtmlWebpackPlugin({
            template: root('index.html'),
            inject: 'body',
            hash: true
        })
    ]
};