import { MARRY_BUTTON_ACTION, MARRY_FUNTION_CALL } from "../actions/types";

const initialState = {
  actionData: "",
  funAction: "",
};

export default function marryButtonReducer(state = initialState, action) {
  switch (action.type) {
    case MARRY_BUTTON_ACTION:
      return { ...state, actionData: action.payload };
    case MARRY_FUNTION_CALL:
      return { ...state, funAction: action.payload };
    default:
      return state;
  }
}
