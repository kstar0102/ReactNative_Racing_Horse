import { RACING_RANDOM_HORSE_DATA } from '../types';

export const raceHorse = (data) => {
    return {
        type: RACING_RANDOM_HORSE_DATA,
        payload: data,
    }
};

export function RaceingHorseAction(raceHorseData) {
    return async (dispatch) => {
        dispatch(raceHorse(raceHorseData));
    }
}
