import { STALL_LEVELUP_DATA } from '../../../../actions/types';

const initialState = {
  stallLevelUpData: '',
}

export default function stallUpReducer(state = initialState, action) {
  switch (action.type) {
    case STALL_LEVELUP_DATA:
      return { ...state, stallLevelUpData: action.payload };
    default:
      return state;
  }
}