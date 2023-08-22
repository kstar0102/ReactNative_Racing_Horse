
import { GET_RACE_CORSE_DATA, GET_RACE_PRIZE_DATA, GET_RACE_JOCKEYS_DATA, GET_RACE_REGISTER_DATA, GET_RACE_WEEK, GET_RACE_CPU_HOURSE } from '../types';
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

export const raceRegisterWeek = (data) => {
    return {
        type: GET_RACE_WEEK,
        payload: data,
    }
};

export const raceCpuhourse = (data) =>{
    return{
        type: GET_RACE_CPU_HOURSE,
        payload: data
    }
}

export function ReacRegisterAction(tableFieldId, weekDate) {
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
                dispatch(raceCpuhourse(res.data.cpu_horse));
                dispatch(raceData(res.data.race_data));
                dispatch(prizeData(res.data.prize_data));
                dispatch(jockeysData(res.data.jockeys));
                dispatch(raceRegisterData(res.data.race_register_data));
                dispatch(raceRegisterWeek(weekDate));
            })
            .catch(error => {
                throw (error);
            });
    };
};