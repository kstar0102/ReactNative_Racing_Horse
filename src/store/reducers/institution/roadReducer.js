import { ROAD_BUY_DATA } from "../../actions/types";

const initialState = {
 roadBuyData: '',
}

export default function roadReducer(state = initialState, action) {
  switch (action.type) {
    case ROAD_BUY_DATA:
      return { ...state, roadBuyData: action.payload };
    default:
      return state;
  }
}