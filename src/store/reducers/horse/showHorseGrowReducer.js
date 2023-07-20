import {SHOW_HORSE_GROW} from "../../actions/types";

const initialState = {
  allGrowData: '',
}

export default function showHorseGrowReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_HORSE_GROW:
      return { ...state, allGrowData: action.payload };
    default:
      return state;
  }
}