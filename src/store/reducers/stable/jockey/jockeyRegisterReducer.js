import {
  GENDER_REGISTER,
  JOCKEY_NAME_REGISTER,
  SHOW_JOCKEY,
} from "../../../actions/types";

const initialState = {
  gender: "",
  name: "",
  getAllData: "",
};

export default function jockeyRegisterReducer(state = initialState, action) {
  switch (action.type) {
    case GENDER_REGISTER:
      return { ...state, gender: action.payload };
    case JOCKEY_NAME_REGISTER:
      return { ...state, name: action.payload };
    case SHOW_JOCKEY:
      return { ...state, getAllData: action.payload };
    default:
      return state;
  }
}
