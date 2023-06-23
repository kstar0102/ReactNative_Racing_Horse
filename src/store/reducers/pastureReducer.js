import { LOGIN_UESR_PASTURE_DATA } from '../actions/types';

const initialState = {
  pastureData: '',
}

export default function pastureReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_UESR_PASTURE_DATA:
      return { ...state, pastureData: action.payload };
    default:
      return state;
  }
}