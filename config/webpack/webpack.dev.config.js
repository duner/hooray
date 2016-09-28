const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

module.exports = require('./webpack.base.config')({
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        path.join(process.cwd(), 'app/index.jsx'),
    ],
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            templateContent: templateContent(),
        }),
    ],
    devtool: 'cheap-module-eval-source-map',
    quiet: true,
});

function templateContent() {
    const html = fs.readFileSync(
        path.resolve(process.cwd(), 'app/index.html')
    ).toString();
    return html;
}
