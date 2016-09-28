var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (options) => ({
    entry: options.entry,
    output: Object.assign({
        path: path.resolve(process.cwd(), 'build'),
        publicPath: '/',
    }, options.output),
    module: {
        loaders: [
            {
                test: /\.(js|jsx)?$/,
                loader: 'babel',
                exclude: /node_modules/,
            },
            {
                  test: /\.html$/,
                  loader: 'html-loader',
            },
            {
              test: /\.(sass|scss)$/,
              loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')
            },
        ]
    },
    plugins: options.plugins.concat([
        new ExtractTextPlugin('build.css'),
    ]),
    resolve: {
        modules: ['app', 'node_modules'],
        extensions: [
            '',
            '.js',
            '.jsx',
            '.sass',
            '.scss',
            '.html'
        ]
    },
    target: 'web',
    progress: true,
});
