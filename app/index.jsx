import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import reactRouterErrorOverride from './utils/reactRouterErrorOverride';

import Root from './containers/Root';

render(
  <AppContainer><Root /></AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    reactRouterErrorOverride();
    const NextRoot = require('./containers/Root').default;
    render(
        <AppContainer><NextRoot /></AppContainer>,
        document.getElementById('root')
    );
  });
}
