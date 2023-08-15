import { ODDS_RANDOM_DATA } from '../types';

export const odds = (data) => {
    return {
        type: ODDS_RANDOM_DATA,
        payload: data,
    }
};

export function RaceOddsAction(oddsData) {
    return async (dispatch) => {
        dispatch(odds(oddsData));
    }
}
