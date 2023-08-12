import { GAME_TIME } from "../../actions/types";

const initialState = {
  gameTime: "",
};

export default function gameTimeRuducer(state = initialState, action) {
  switch (action.type) {
    case GAME_TIME:
      return { ...state, gameTime: action.payload }
    default:
      return state;
  }
}
