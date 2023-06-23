import { LOGIN_USER_TOKEN_DATA } from '../actions/types';

const initialState = {
  tokenData: ''
}

export default function tokenReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_TOKEN_DATA:
      return { ...state, tokenData: action.payload };
    default:
      return state;
  }
}