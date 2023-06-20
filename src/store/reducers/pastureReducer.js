import { PASTURE_NAME_DATA, PASTURE_SIZE_DATA, PASTURE_NAME_NO, PASTURE_NAMEMEAN_NO, PASTURE_NAMS_INIT } from "../actions/types";

const initialState = {
  name: '',
  noName: '',
  noNameMean: '',
  allData: ''
}

export default function pastureReducer(state = initialState, action) {
  switch (action.type) {
    case PASTURE_NAME_DATA:
      return { ...state, name: action.payload };
    case PASTURE_NAME_NO:
      return { ...state, noName: action.payload };
    case PASTURE_NAMEMEAN_NO:
      return { ...state, noNameMean: action.payload };
    case PASTURE_SIZE_DATA:
      return { ...state, allData: action.payload };
    default:
      return state;
  }
}
