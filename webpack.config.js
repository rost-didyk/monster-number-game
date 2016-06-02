'use strict';

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    entry: "./src/app.js",

    output: {
        path: "./public",
        filename: "game.js"
    },

    devtool: "source-map",

    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
            }, {
                test: /\.html$/, exclude: /node_modules/, loader: "text-loader"
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }
        ]
    },

    resolve: {
        root: [
            path.resolve(__dirname, 'src')
        ]
    },

    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};