import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { reduxReactRouter, createHistory } from 'redux-react-router';
import routes from '../routes.jsx';

export default function configureStore(initialState) {
	const logger = createLogger()
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(thunk, logger),
		reduxReactRouter({ routes, createHistory })
	)
	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers')
			store.replaceReducer(nextRootReducer)
		})
	}

	return store
}