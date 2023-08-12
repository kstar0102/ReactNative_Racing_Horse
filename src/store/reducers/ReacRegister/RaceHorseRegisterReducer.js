import {
    REGISTERING_DATA
  } from "../../actions/types";
  
  const initialState = {
    registeringData: "",
  };
  
  export default function RaceHorseRegisterReducer(state = initialState, action) {
    switch (action.type) {
      case REGISTERING_DATA:
        return { ...state, registeringData: action.payload };
      default:
        return state;
    }
  }
  