import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import Application from './containers/Application';
import HomePage from './containers/HomePage';

export default (
    <Route path="/" component={Application}>
        <IndexRedirect to="/home" />
        <Route path="home" component={HomePage} />
    </Route>
);
