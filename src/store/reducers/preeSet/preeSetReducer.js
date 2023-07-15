import {
  PREESET_PASTURE_DATA,
  PREESET_PASTURE_NAMES,
  PREESET_STALL_DATA,
  PREESET_STALL_NAMES,
} from "../../actions/types";

const initialState = {
  pasturePreeSetData: "",
  pastureNamePreeSetData: "",
  stallPreeSetData: "",
  stallNamePreeSetData: "",
};

export default function preeSetReducer(state = initialState, action) {
  switch (action.type) {
    case PREESET_PASTURE_DATA:
      return { ...state, pasturePreeSetData: action.payload };
    case PREESET_PASTURE_NAMES:
      return { ...state, pastureNamePreeSetData: action.payload };
    case PREESET_STALL_DATA:
      return { ...state, stallPreeSetData: action.payload };
    case PREESET_STALL_NAMES:
      return { ...state, stallNamePreeSetData: action.payload };
    default:
      return state;
  }
}
