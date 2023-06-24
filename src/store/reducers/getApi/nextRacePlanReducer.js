import { GET_NEXT_WEEK_RACE_PLAN } from "../../actions/types";

const initialState = {
  nextRacePlanData: '',
}

export default function nextRacePlanReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEXT_WEEK_RACE_PLAN:
      return { ...state, nextRacePlanData: action.payload };
    default:
      return state;
  }
}