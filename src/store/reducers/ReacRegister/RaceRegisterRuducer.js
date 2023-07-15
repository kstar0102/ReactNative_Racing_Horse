import {
  GET_RACE_CORSE_DATA,
  GET_RACE_PRIZE_DATA,
  GET_RACE_JOCKEYS_DATA,
  GET_RACE_REGISTER_DATA,
} from "../../actions/types";

const initialState = {
  raceFieldData: "",
  prizeData: "",
  jockeysData: "",
  raceRegisterData: "",
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
    default:
      return state;
  }
}
