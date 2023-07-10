import { GET_STABLE_MENU } from '../../types';
import axios from 'axios';
import { API } from '../../../../utils/config';

export const stableData = (data) => {
    return {
        type: GET_STABLE_MENU,
        payload: data,
    }
};

export function StableGetAtion() {
    return async (dispatch, getState) => {
        const token = getState().tokenData.tokenData;
        return await axios.get(API + 'getstalls',
            {
                headers: { Authorization: token },

            }
        )
            .then(res => {
                dispatch(stableData(res.data.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};