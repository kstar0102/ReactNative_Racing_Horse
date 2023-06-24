import { GET_BEFOR_WEEK_RACE_PLAN } from "../../actions/types";

const initialState = {
  beforRacePlanData: '',
}

export default function beforRacePlanReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BEFOR_WEEK_RACE_PLAN:
      return { ...state, beforRacePlanData: action.payload };
    default:
      return state;
  }
}