var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: [
    path.resolve(__dirname, 'static/src/index.jsx'),
    path.resolve(__dirname, 'static/src/stylesheets/app.scss'),
  ],
  output: {
    path: path.join(__dirname, 'static/build'),
    filename: 'app.bundle.js',
    publicPath: '/static/build/'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'static/src')
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },

      // Images
      { test: /\.(png|jpg|gif)$/, loader: 'url?limit=10000&name=images/[name].[ext]?[hash]' },

      // Font Definitions
      { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[ext]' },
      { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]' },
      { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]' },
      { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]' },
      { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]' }
    ]
  },
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      solid: 'node_modules/bf-solid/_lib/solid'
    },
    extensions: ['', '.js', '.jsx', '.sass', '.scss']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        keep_fnames: true,
        warnings: false
      },
      sourceMap: false,
      mangle: true,
      output: {
        comments: false
      }
    }),
    new webpack.DefinePlugin({
      process: { env: { NODE_ENV: JSON.stringify('production') } },
    }),
    new ExtractTextPlugin('build.css'),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: false
    })
  ]
};
