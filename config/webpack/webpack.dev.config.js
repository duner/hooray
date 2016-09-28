const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

module.exports = require('./webpack.base.config')({
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        path.join(process.cwd(), 'app/index.jsx'),
    ],
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            templateContent: templateContent(),
        }),
    ],
    devtool: 'cheap-module-eval-source-map',
    quiet: false,
});

function templateContent() {
    const html = fs.readFileSync(
        path.resolve(process.cwd(), 'app/index.html')
    ).toString();
    return html;
}
