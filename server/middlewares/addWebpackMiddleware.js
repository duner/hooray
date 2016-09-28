const express = require('express');
const path = require('path');
const pkg = require(path.resolve(process.cwd(), 'package.json'));

const addDevMiddlewares = (app, webpackConfig) => {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack(webpackConfig);
    const middleware = webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        hot: true,
        serverSideRender: true
    });

    const fs = middleware.fileSystem;

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));

    app.get('*', (req, res) => {
        fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
            if (err) {
                res.sendStatus(404);
            } else {
                res.send(file.toString());
            }
        });
    });
};

const addProdMiddlewares = (app, options) => {
    const publicPath = options.publicPath || '/';
    const outputPath = options.outputPath || path.resolve(process.cwd(), 'build');

    // compression middleware compresses your server responses which makes them
    // smaller (applies also to assets). You can read more about that technique
    // and other good practices on official Express.js docs http://mxs.is/googmy
    app.use(compression());
    app.use(publicPath, express.static(outputPath));

    app.get('*', (req, res) => res.sendFile(path.resolve(outputPath, 'index.html')));
};

module.exports = (app, options) => {
    const isProd = process.env.NODE_ENV === 'production';

    if (isProd) {
        addProdMiddlewares(app, options);
    } else {
        const webpackDevConfig = require('../../config/webpack/webpack.dev.config');
        addDevMiddlewares(app, webpackDevConfig);
    }

    return app;
};
