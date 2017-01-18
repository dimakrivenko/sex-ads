import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default {
    listAds () {
        // return axios.get(`${apiPrefix}/api/v0/ads/${category}`);
        return axios.get(`${apiPrefix}/api/v0/ads`);
    },

    addAd (data) {
        return axios.post(`${apiPrefix}/api/v0/ads`, data);
    },

    deleteNote (noteId) {
        return axios.delete(`${apiPrefix}/api/v0/ads/${noteId}`);
    }
}
