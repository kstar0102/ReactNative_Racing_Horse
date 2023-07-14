import { TRUCK_LEVELUP_DATA } from "../../../../actions/types";

const initialState = {
  truckLevelUpData: '',
}

export default function stallTruckReduce(state = initialState, action) {
  switch (action.type) {
    case TRUCK_LEVELUP_DATA:
      return { ...state, truckLevelUpData: action.payload };
    default:
      return state;
  }
}