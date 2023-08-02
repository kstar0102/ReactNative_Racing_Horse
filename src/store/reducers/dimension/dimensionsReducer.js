import { DIMENSIONS_SIZE } from "../../actions/types";

const initialState = {
  dimensionsData: '',
}

export default function dimensionsReducer(state = initialState, action) {
  switch (action.type) {
    case DIMENSIONS_SIZE:
      return { ...state, dimensionsData: action.payload };
    default:
      return state;
  }
}