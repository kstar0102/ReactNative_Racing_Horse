import {
    MARRY_BUTTON_ACTION,
  } from "../actions/types";
  
  const initialState = {
    actionData: "",
  };
  
  export default function marryButtonReducer(state = initialState, action) {
    switch (action.type) {
      case MARRY_BUTTON_ACTION:
        return { ...state, actionData: action.payload };
      default:
        return state;
    }
  }
  