import { TRUCK_BUY_DATA } from "../../actions/types";

const initialState = {
  truckBuyData: '',
}

export default function truckReduce(state = initialState, action) {
  switch (action.type) {
    case TRUCK_BUY_DATA:
      return { ...state, truckBuyData: action.payload };
    default:
      return state;
  }
}