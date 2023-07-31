
import { RACING_HORSE_DATA, RACING_JOCKEY_DATA } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';

export const raceData = (data) => {
    return {
        type: RACING_HORSE_DATA,
        payload: data,
    }
};

export const jockeysData = (data) => {
    return {
        type: RACING_JOCKEY_DATA,
        payload: data,
    }
};


export function RaceStartAction(tableFieldId) {
    return async (dispatch, getState) => {
        const token = getState().tokenData.tokenData;
        return await axios.post(API + 'getdataracing',
            {
                data: tableFieldId
            },
            {
                headers: { Authorization: token },

            }
        )
            .then(res => {
                dispatch(raceData(res.data.horse_data));
                dispatch(jockeysData(res.data.jockey_data));
            })
            .catch(error => {
                throw (error);
            });
    };
};