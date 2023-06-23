import { HORSE_ALL_DATA, HORSE_CHECK_DATA, HORSE_CHECK_ALL_DATA } from "../actions/types";

const initialState = {
  CheckData: '',
  allData: '',
  allCheckData: ''
}

export default function horseReducer(state = initialState, action) {
  
  switch (action.type) {
    case HORSE_ALL_DATA:
      return { ...state, allData: action.payload };
    case HORSE_CHECK_DATA:
      return { ...state, CheckData: action.payload };
      case HORSE_CHECK_ALL_DATA:
      return { ...state, allCheckData: action.payload };
    default:
      return state;
  }
}