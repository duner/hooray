import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import routes from './../../routes.jsx';
import applicationStore from './../../store';

const Root = (props) => (
    <Provider store={applicationStore}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
)

export default Root;
