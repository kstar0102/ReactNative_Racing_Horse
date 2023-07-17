import { GET_NEXT_NEXT_NEXT_WEEK_RACE_PLAN } from "../../actions/types";

const initialState = {
  nextNextNextRacePlanData: '',
}

export default function nextNextNextRacePlanReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEXT_NEXT_NEXT_WEEK_RACE_PLAN:
      return { ...state, nextNextNextRacePlanData: action.payload };
    default:
      return state;
  }
}