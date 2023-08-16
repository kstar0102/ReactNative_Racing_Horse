
import {
    RACING_RANDOM_HORSE_DATA,
  } from "../../actions/types";
  
  const initialState = {
    racingHorseData: "",
  };
  
  export default function RacingHorseReducer(state = initialState, action) {
    switch (action.type) {
      case RACING_RANDOM_HORSE_DATA:
        return { ...state, racingHorseData: action.payload };
      default:
        return state;
    }
  }
  