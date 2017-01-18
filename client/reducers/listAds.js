import {
    LOAD_ADS_REQUEST,
    LOAD_ADS_SUCCESS,
    LOAD_ADS_FAIL
} from '../actions/AdsActions';

const DEFAULT_STATE = {
	isLoading: false,
	loadingError: null,
	item_list: []
}

export default function listAds(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case LOAD_ADS_REQUEST:
			return { ...state, isLoading: true }
		
		case LOAD_ADS_SUCCESS:
			return { ...state, isLoading: false, item_list: action.playload, loadingError: null }

		case LOAD_ADS_FAIL:
			return { ...state, loadingError: action.error }
		
		default:
			return state;
	}
}

