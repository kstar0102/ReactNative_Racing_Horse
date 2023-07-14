import { POOL_LEVELUP_DATA } from "../../../../actions/types";

const initialState = {
  poolLevelUpData: '',
}

export default function stallPoolReducer(state = initialState, action) {
  switch (action.type) {
    case POOL_LEVELUP_DATA:
      return { ...state, poolLevelUpData: action.payload };
    default:
      return state;
  }
}