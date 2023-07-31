import { RACING_HORSE_DATA, RACING_JOCKEY_DATA } from "../../actions/types";

const initialState = {
  racingJockey: "",
  racingHorse: "",
};

export default function RaceStartReducer(state = initialState, action) {
  switch (action.type) {
    case RACING_HORSE_DATA:
      return { ...state, racingHorse: action.payload };
    case RACING_JOCKEY_DATA:
      return { ...state, racingJockey: action.payload };
    default:
      return state;
  }
}
