import React     from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App.jsx';

import StartPage from './containers/pages/StartPage.jsx';
import Category from './containers/pages/CategoryPage.jsx';
import Admin from './containers/pages/AdminPage.jsx';
import NotFound from './components/NotFound.jsx';

export default (
    <Route path="/" component={App} >
    	<IndexRoute component={StartPage} />
        <Route path="/admin" component={Admin} />
        <Route path="/category-1" component={Category} />
        <Route path="/category-2" component={Category} />
        <Route path="/category-3" component={Category} />
        <Route path='*' component={NotFound} />
    </Route>
);


