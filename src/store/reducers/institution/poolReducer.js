import { POOL_BUY_DATA } from "../../actions/types";

const initialState = {
  poolBuyData: '',
}

export default function poolReducer(state = initialState, action) {
  switch (action.type) {
    case POOL_BUY_DATA:
      return { ...state, poolBuyData: action.payload };
    default:
      return state;
  }
}