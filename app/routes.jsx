import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import Application from './containers/Application';

export default (
  <Route path="/" component={Application}>
    <IndexRedirect to="/foo" />
    <Route path="foo" component={Application} />
  </Route>
);
