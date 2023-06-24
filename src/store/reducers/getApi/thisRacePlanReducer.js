import { GET_THIS_WEEK_RACE_PLAN } from "../../actions/types";

const initialState = {
  thisRacePlanData: '',
}

export default function thisRacePlanReducer(state = initialState, action) {
  switch (action.type) {
    case GET_THIS_WEEK_RACE_PLAN:
      return { ...state, thisRacePlanData: action.payload };
    default:
      return state;
  }
}