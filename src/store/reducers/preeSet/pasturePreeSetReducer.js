import {
  PREESET_PASTURE_DATA,
  PREESET_PASTURE_NAMES,
} from "../../actions/types";

const initialState = {
  pasturePreeSetData: "",
  pastureNamePreeSetData: "",
};

export default function pasturePreeSetReducer(state = initialState, action) {
  switch (action.type) {
    case PREESET_PASTURE_DATA:
      return { ...state, pasturePreeSetData: action.payload };
    case PREESET_PASTURE_NAMES:
      return { ...state, pastureNamePreeSetData: action.payload };
    default:
      return state;
  }
}
