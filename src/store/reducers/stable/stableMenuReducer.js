import { GET_STABLE_MENU, STABLE_MENU_DATA } from "../../actions/types";

const initialState = {
    StableMenuData: '',
    StableSendData: '',
}

export default function stableMenuReducer(state = initialState, action) {
    switch (action.type) {
        case GET_STABLE_MENU:
            return { ...state, StableMenuData: action.payload };
        case STABLE_MENU_DATA:
            return { ...state, StableSendData: action.payload };
        default:
            return state;
    }
}