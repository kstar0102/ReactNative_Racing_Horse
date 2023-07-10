import { STABLE_MENU_DATA } from '../../types';
import axios from 'axios';
import { API } from '../../../../utils/config';

export const stableData = (data) => {
    return {
        type: STABLE_MENU_DATA,
        payload: data,
    }
};

export function stableAllGetAction(user_id) {
    return async (dispatch, getState) => {
        const token = getState().tokenData.tokenData;
        const getData = `horsestall?user_id=${user_id}`;
        return await axios.get(API + getData,
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