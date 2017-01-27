var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin  = require('extract-text-webpack-plugin');


module.exports = {
    // or devtool: 'eval' to debug issues with compiled output:
    devtool: 'cheap-module-eval-source-map',
    entry: [
        // necessary for hot reloading with IE:
        'eventsource-polyfill',
        // listen to code updates emitted by hot middleware:
        'webpack-hot-middleware/client',
        // your code:
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: 'style!css!sass?sourceMap'
        },{
            test: /\.css$/,
            loader: 'style!css?sourceMap'
        },{
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/octet-stream'
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file'
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=image/svg+xml'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
