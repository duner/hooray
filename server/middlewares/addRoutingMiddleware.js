import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './../../app/routes';

const addRoutingMiddleware = (app, options) => {
    app.use((req, res, next) => {
      match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
        if (err) { return res.status(500).end(renderError(err)); }
        if (redirectLocation) { return res.redirect(302, redirectLocation.pathname + redirectLocation.search); }
        if (!renderProps) { return next(); }

        const store = configureStore();

        return fetchComponentData(store, renderProps.components, renderProps.params)
          .then(() => {
            const initialView = renderToString(
              <Provider store={store}>
                <IntlWrapper>
                  <RouterContext {...renderProps} />
                </IntlWrapper>
              </Provider>
            );
            const finalState = store.getState();

            res
              .set('Content-Type', 'text/html')
              .status(200)
              .end(renderFullPage(initialView, finalState));
          })
          .catch((error) => next(error));
      });
    });
};


module.exports = (app, options) => {
    addRoutingMiddleware(app, options);
    return app;
};
