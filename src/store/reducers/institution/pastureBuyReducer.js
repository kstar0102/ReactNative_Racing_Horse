import { PASTURE_BUY_DATA } from '../../actions/types';

const initialState = {
  pastureBuyData: '',
}

export default function pastureBuyReducer(state = initialState, action) {
  switch (action.type) {
    case PASTURE_BUY_DATA:
      return { ...state, pastureBuyData: action.payload };
    default:
      return state;
  }
}