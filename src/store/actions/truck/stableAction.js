import { STABLE_MENU_DATA, LOGIN_USER_DATA } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';

export const fetchData = (data) => {
    return {
        type: STABLE_MENU_DATA,
        payload: data,
    }
};

export const userData = (user) => {
    return {
        type: LOGIN_USER_DATA,
        payload: user,
    }
};

export function stableAction(stableData) {
    return async (dispatch, getState) => {
        const token = getState().tokenData.tokenData;

        return await axios.post(API + "gotostall", {
            data: stableData
        },
            {
                headers: { Authorization: token }
            })
            .then(res => {
                dispatch(fetchData(res.data.horses[0]))
                dispatch(userData(res.data.data[0]))
            })
            .catch(error => {
                throw (error);
            });
    }
};
