import { STALL_LEVELUP_DATA } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';

export const institutionData = (data) => {
    return {
        type: STALL_LEVELUP_DATA,
        payload: data,
    }
};


export function getStallStateAction(stallData) {
    return async (dispatch, getState) => {
        const token = getState().tokenData.tokenData;
        return await axios.post(API + 'getstallstate',
            {
                data: stallData
            },
            {
                headers: { Authorization: token },

            }
        )
            .then(res => {
                dispatch(institutionData(res.data.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};