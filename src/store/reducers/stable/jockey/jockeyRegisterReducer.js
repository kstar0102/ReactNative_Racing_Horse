import { GENDER_REGISTER, JOCKEY_NAME_REGISTER } from "../../../actions/types";

const initialState = {
    gender: '',
    name: '',
}

export default function jockeyRegisterReducer(state = initialState, action) {
    switch (action.type) {
        case GENDER_REGISTER:
            return { ...state, gender: action.payload };
        case JOCKEY_NAME_REGISTER:
            return { ...state, name: action.payload };
        default:
            return state;
    }
}