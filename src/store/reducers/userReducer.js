import { LOGIN_USER_DATA } from '../actions/types';

const initialState = {
  userData: ''
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_DATA:
      console.log("======================================", action.payload);
      return { ...state, userData: action.payload };
    default:
      return state;
  }
}