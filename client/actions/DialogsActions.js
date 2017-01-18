
export const OPEN_DIALOG_CREATE_ITEM = 'OPEN_DIALOG_CREATE_ITEM';
export const CLOSE_All_DIALOG = 'CLOSE_All_DIALOG';

export function openDialogCreateItem () {
    return (dispatch) => {
        dispatch({
            type: OPEN_DIALOG_CREATE_ITEM
        })
    }
}

export function closeAllDialog () {
    return (dispatch) => {
        dispatch({
            type: CLOSE_All_DIALOG
        })
    }
}