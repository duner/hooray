import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';

import routes from './routes.jsx';
import applicationStore from './store';

render(
    <Provider store={applicationStore}>
      <Router history={hashHistory} routes={routes} />
    </Provider>,
    document.querySelector('#app')
);