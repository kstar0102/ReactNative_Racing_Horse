import { GET_LAST_WEEK_RACE_PLAN } from "../../actions/types";

const initialState = {
  lastRacePlanData: '',
}

export default function lastRacePlanReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LAST_WEEK_RACE_PLAN:
      return { ...state, lastRacePlanData: action.payload };
    default:
      return state;
  }
}