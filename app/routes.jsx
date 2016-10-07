import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Application from './containers/Application';
import PostsPage from './containers/PostsPage';

export default (
    <Route path="/" component={Application}>
        <IndexRoute component={PostsPage} />
        <Route path="posts" component={PostsPage} />
    </Route>
);
