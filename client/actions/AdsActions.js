import api from '../api';

export const LOAD_ADS_REQUEST = 'LOAD_ADS_REQUEST';
export const LOAD_ADS_SUCCESS = 'LOAD_ADS_SUCCESS';
export const LOAD_ADS_FAIL    = 'LOAD_ADS_FAIL';

export const CREATE_AD_REQUEST    = 'CREATE_AD_REQUEST';
export const CREATE_AD_SUCCESS    = 'CREATE_AD_SUCCESS';
export const CREATE_AD_FAIL    = 'CREATE_AD_FAIL';


export function loadAds (cat) {
    console.log(cat)
    return (dispatch) => {
        dispatch({
            type: LOAD_ADS_REQUEST
        })
        return api.listAds()
            .then((res) => 
                dispatch({
                    type: LOAD_ADS_SUCCESS,
                    playload: res.data
                })
            )
            .catch(err =>
                dispatch({
                    type: LOAD_ADS_FAIL,
                    error: err
                })
        );
    }
}

export function createAd(item) {
    return (dispatch) => {
        dispatch({
            type: CREATE_AD_REQUEST
        })
        return api.addAd(item)
            .then((res) => {
                dispatch({
                     type: CREATE_AD_SUCCESS,
                     createdAd: res
                })
            })
            .catch((err) =>
                dispatch({
                    type: CREATE_AD_FAIL,
                    error: err
                })
            )
    }
}

// export function loadAd(params = {}) {
//     return dispatch => {
//         dispatch({
//             type: LOAD_POLL_REQUEST
//         });

//         return api.polls.show(params.id).then(data =>
//             dispatch({
//                 poll: data,
//                 type: LOAD_POLL_SUCCESS
//             })
//         );
//     };
// }
