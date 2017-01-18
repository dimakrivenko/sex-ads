import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-react-router';
import listAds from './listAds'
import createAd from './createAd'
import modals from './modals'

export default combineReducers({
	router: routerStateReducer,
	listAds,
	createAd,
	modals
})