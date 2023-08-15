import {
    NUMBER_RANDOM_DATA,
  } from "../../actions/types";
  
  const initialState = {
    numbersData: "",
  };
  
  export default function RaceNumberReducer(state = initialState, action) {
    switch (action.type) {
      case NUMBER_RANDOM_DATA:
        return { ...state, numbersData: action.payload };
      default:
        return state;
    }
  }
  