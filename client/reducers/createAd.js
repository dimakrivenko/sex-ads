import {
    CREATE_AD_REQUEST,
    CREATE_AD_SUCCESS,
    CREATE_AD_FAIL
} from '../actions/AdsActions';

const DEFAULT_STATE = {
	isLoading: false,
	loadingError: null,
	newAd: {}
}

export default function createAd(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case CREATE_AD_REQUEST:
			return { ...state, isLoading: true }
		
		case CREATE_AD_SUCCESS:
			return { ...state, isLoading: false, newAd: action.playload, loadingError: null }

		case CREATE_AD_FAIL:
			return { ...state, loadingError: action.error }
		
		default:
			return state;
	}
}

