import {
    RACE_RESULT_DATA,
  } from "../../actions/types";
  
  const initialState = {
    raceResultData: "",
  };
  
  export default function RaceReducer(state = initialState, action) {
    switch (action.type) {
      case RACE_RESULT_DATA:
        return { ...state, raceResultData: action.payload };
      default:
        return state;
    }
  }
  