import {
    LAST_RACE_RESULT_DATA,
  } from "../../actions/types";
  
  const initialState = {
    LastRaceResult: "",
  };
  
  export default function LastRaceResultReducer(state = initialState, action) {
    switch (action.type) {
      case LAST_RACE_RESULT_DATA:
        return { ...state, LastRaceResult: action.payload };
      default:
        return state;
    }
  }
  