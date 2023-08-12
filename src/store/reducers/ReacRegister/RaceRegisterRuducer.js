import {
  GET_RACE_CORSE_DATA,
  GET_RACE_PRIZE_DATA,
  GET_RACE_JOCKEYS_DATA,
  GET_RACE_REGISTER_DATA,
  GET_RACE_WEEK,
} from "../../actions/types";

const initialState = {
  raceFieldData: "",
  prizeData: "",
  jockeysData: "",
  raceRegisterData: "",
  raceWeekData: "",
};

export default function RaceRegisterRuducer(state = initialState, action) {
  switch (action.type) {
    case GET_RACE_CORSE_DATA:
      return { ...state, raceFieldData: action.payload };
    case GET_RACE_PRIZE_DATA:
      return { ...state, prizeData: action.payload };
    case GET_RACE_JOCKEYS_DATA:
      return { ...state, jockeysData: action.payload };
    case GET_RACE_REGISTER_DATA:
      return { ...state, raceRegisterData: action.payload };
    case GET_RACE_WEEK:
      return { ...state, raceWeekData: action.payload };
    default:
      return state;
  }
}
