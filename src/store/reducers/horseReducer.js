import {
  HORSE_ALL_DATA,
  HORSE_CHECK_DATA,
  HORSE_CHECK_AGE,
  HORSE_SAVE_DATA,
  SALE_HORSE_SAVE_DATA
} from "../actions/types";

const initialState = {
  CheckData: "",
  allData: "",
  saveData: "",
  checkAge: "",
  saleHorseData: ""
};

export default function horseReducer(state = initialState, action) {
  switch (action.type) {
    case HORSE_ALL_DATA:
      return { ...state, allData: action.payload };
    case HORSE_CHECK_DATA:
      return { ...state, CheckData: action.payload };
    case HORSE_CHECK_AGE:
      return { ...state, checkAge: action.payload };
    case HORSE_SAVE_DATA:
      return { ...state, saveData: action.payload };
    case SALE_HORSE_SAVE_DATA:
        return { ...state, saleHorseData: action.payload };
    default:
      return state;
  }
}
