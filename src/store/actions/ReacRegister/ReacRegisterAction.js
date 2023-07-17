
import { GET_RACE_CORSE_DATA, GET_RACE_PRIZE_DATA, GET_RACE_JOCKEYS_DATA, GET_RACE_REGISTER_DATA } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';

export const raceData = (data) => {
    return {
        type: GET_RACE_CORSE_DATA,
        payload: data,
    }
};
export const prizeData = (data) => {
    return {
        type: GET_RACE_PRIZE_DATA,
        payload: data,
    }
};

export const jockeysData = (data) => {
    return {
        type: GET_RACE_JOCKEYS_DATA,
        payload: data,
    }
};

export const raceRegisterData = (data) => {
    return {
        type: GET_RACE_REGISTER_DATA,
        payload: data,
    }
};

export function ReacRegisterAction(tableFieldId) {
    return async (dispatch, getState) => {
        const token = getState().tokenData.tokenData;
        return await axios.post(API + 'showraceplan',
            {
                data: tableFieldId
            },
            {
                headers: { Authorization: token },

            }
        )
            .then(res => {
                dispatch(raceData(res.data.race_data));
                dispatch(prizeData(res.data.prize_data));
                dispatch(jockeysData(res.data.jockeys));
                dispatch(raceRegisterData(res.data.race_register_data));
            })
            .catch(error => {
                throw (error);
            });
    };
};