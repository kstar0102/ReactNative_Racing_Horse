import {
  GAME_F_COUNT_DOWN,
  GAME_S_COUNT_DOWN,
  GAME_T_COUNT_DOWN,
} from "../../actions/types";

const initialState = {
  fCountDown: "",
  sCountDown: "",
  tCountDown: "",
};

export default function countDownReducer(state = initialState, action) {
  switch (action.type) {
    case GAME_F_COUNT_DOWN:
      return { ...state, fCountDown: action.payload };
    case GAME_S_COUNT_DOWN:
      return { ...state, sCountDown: action.payload };
    case GAME_T_COUNT_DOWN:
      return { ...state, tCountDown: action.payload };
    default:
      return state;
  }
}
