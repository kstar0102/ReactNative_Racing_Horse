import { INSTITUTION_MENU_DATA, INSTITUTION_MENU_STALL_ID } from '../../types';
import axios from 'axios';
import { API } from '../../../../utils/config';

export const institutionData = (data) => {
    return {
        type: INSTITUTION_MENU_DATA,
        payload: data,
    }
};


export function getInstitutionAction(userId) {
    return async (dispatch, getState) => {
        const token = getState().tokenData.tokenData;
        return await axios.post(API + 'getstallname',
            {
                data: userId
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