import { LONGIFIELD_BUY_DATA } from '../../actions/types';

const initialState = {
  ranchBuyData: '',
}

export default function longiFieldReducer(state = initialState, action) {
  switch (action.type) {
    case LONGIFIELD_BUY_DATA:
      return { ...state, ranchBuyData: action.payload };
    default:
      return state;
  }
}