import {
    ODDS_RANDOM_DATA,
  } from "../../actions/types";
  
  const initialState = {
    oddsData: "",
  };
  
  export default function RaceOddsReducer(state = initialState, action) {
    switch (action.type) {
      case ODDS_RANDOM_DATA:
        return { ...state, oddsData: action.payload };
      default:
        return state;
    }
  }
  