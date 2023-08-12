import { GAME_TIME } from '../types';

export const gameTime = (timeData) => {
    return {
        type: GAME_TIME,
        payload: timeData,
    }
};

export function gameTimeAction(setGameTime) {
    return async (dispatch) => {
        dispatch(gameTime(setGameTime))
    }
}
