import { ARROW_POSITION_STATE } from "../../actions/types";

const initialState = {
  arrowState: '',
}

export default function arrowReducer(state = initialState, action) {

  switch (action.type) {
    case ARROW_POSITION_STATE:
      return { ...state, arrowState: action.payload };
    default:
      return state;
  }
}