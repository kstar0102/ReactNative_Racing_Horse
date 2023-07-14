import { LONGIFIELD_LEVELUP_DATA } from "../../../../actions/types";

const initialState = {
  ranchLevelUpData: '',
}

export default function stallLongiFieldReducer(state = initialState, action) {
  switch (action.type) {
    case LONGIFIELD_LEVELUP_DATA:
      return { ...state, ranchLevelUpData: action.payload };
    default:
      return state;
  }
}