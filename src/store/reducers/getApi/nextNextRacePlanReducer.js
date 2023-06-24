import { GET_NEXT_NEXT_WEEK_RACE_PLAN } from "../../actions/types";

const initialState = {
  nextNextRacePlanData: '',
}

export default function nextNextRacePlanReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEXT_NEXT_WEEK_RACE_PLAN:
      return { ...state, nextNextRacePlanData: action.payload };
    default:
      return state;
  }
}