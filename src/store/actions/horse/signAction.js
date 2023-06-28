import { ARROW_POSITION_STATE } from '../types';

export const signControl = (nameCheckData) => {
    return {
        type: ARROW_POSITION_STATE,
        payload: nameCheckData,
    }
};

export function signAction() {
    return async (dispatch) => {
        dispatch(signControl({ "horse_id": 1, "pt": 100, "user_id": 1, "what": "tt" }))
    }
}
