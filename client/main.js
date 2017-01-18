import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore'
import routes from './routes.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

const store = configureStore()

// Needed for onTouchTap
injectTapEventPlugin();

ReactDOM.render(
	<Provider store={store}>
		<Router children={routes} history={browserHistory} />
    </Provider>,
	document.getElementById('app')
);
