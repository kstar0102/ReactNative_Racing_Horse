import { PASTURE_NAME_DATA, PASTURE_NAME_NO, PASTURE_NAMEMEAN_NO, RESERVATION_DATA } from "../actions/types";

const initialState = {
  name: '',
  noName: '',
  noNameMean: '',
  reservationData: ''
}

export default function validationReducer(state = initialState, action) {
  switch (action.type) {
    case PASTURE_NAME_DATA:
      return { ...state, name: action.payload };
    case PASTURE_NAME_NO:
      return { ...state, noName: action.payload };
    case PASTURE_NAMEMEAN_NO:
      return { ...state, noNameMean: action.payload };
    case RESERVATION_DATA:
      return { ...state, reservationData: action.payload };
    default:
      return state;
  }
}
