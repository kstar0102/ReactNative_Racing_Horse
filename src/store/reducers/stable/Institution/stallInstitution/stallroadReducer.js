import { ROAD_LEVELUP_DATA } from "../../../../actions/types";

const initialState = {
 roadLevelUpData: '',
}

export default function stallRoadReducer(state = initialState, action) {
  switch (action.type) {
    case ROAD_LEVELUP_DATA:
      return { ...state, roadLevelUpData: action.payload };
    default:
      return state;
  }
}