import { INSTITUTION_MENU_DATA } from "../../../actions/types";

const initialState = {
    institutionMenuData: '',
}

export default function institutionReducer(state = initialState, action) {
    switch (action.type) {
        case INSTITUTION_MENU_DATA:
            return { ...state, institutionMenuData: action.payload };
        default:
            return state;
    }
}