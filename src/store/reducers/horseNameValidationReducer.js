import { HORSE_NAME_VALIDATION, HORSE_NAME_ILLEGAL } from "../actions/types";

const initialState = {
  horseNameValid: "",
  horseNameIllegal: "",
};

export default function horseNameValidationReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case HORSE_NAME_VALIDATION:
      return { ...state, horseNameValid: action.payload };
    case HORSE_NAME_ILLEGAL:
      return { ...state, horseNameIllegal: action.payload };
    default:
      return state;
  }
}
