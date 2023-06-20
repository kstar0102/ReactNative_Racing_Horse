import { LOGIN_USER_DATA } from '../actions/types';

export default function authReducer(state = [], action) {
  switch (action.type) {
      case LOGIN_USER_DATA:
      return action.payload;
    default:
      return state;
  }
}