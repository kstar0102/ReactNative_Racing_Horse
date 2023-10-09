import { MARRY_KNICKS_GET } from '../actions/types';

const initialState = {
    knickData: '',
}

export default function knickReducer(state = initialState, action) {
  switch (action.type) {
    case MARRY_KNICKS_GET:
      return { ...state, knickData: action.payload };
    default:
      return state;
  }
}