import {
    OPEN_DIALOG_CREATE_ITEM,
    CLOSE_All_DIALOG
} from '../actions/DialogsActions';

const DEFAULT_STATE = {
	modalShowList: {
		modalCreateItem: false
	}
}

export default function modals(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case OPEN_DIALOG_CREATE_ITEM:
			return {...state, modalShowList: { modalCreateItem: true }}
		case CLOSE_All_DIALOG:
			return {
				...state,
				modalShowList: { 
					modalCreateItem: false
				}
			}
		
		
		default:
			return state;
	}
}

