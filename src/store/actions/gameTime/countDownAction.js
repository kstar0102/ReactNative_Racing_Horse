import { GAME_F_COUNT_DOWN, GAME_S_COUNT_DOWN, GAME_T_COUNT_DOWN } from '../types';

export const fCountDown = (count) => {
    return {
        type: GAME_F_COUNT_DOWN,
        payload: count,
    }
};

export const sCountDown = (count) => {
    return {
        type: GAME_S_COUNT_DOWN,
        payload: count,
    }
};

export const tCountDown = (count) => {
    return {
        type: GAME_T_COUNT_DOWN,
        payload: count,
    }
};

export function countDownAction(fData, sData, tData) {
    return async (dispatch) => {
        dispatch(fCountDown(fData));
        dispatch(sCountDown(sData));
        dispatch(tCountDown(tData));
    }
}