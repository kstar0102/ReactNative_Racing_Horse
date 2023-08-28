import { MARRY_BUTTON_ACTION } from "../types";

export const fetchData = (data) => {
  return {
    type: MARRY_BUTTON_ACTION,
    payload: data,
  };
};

export function marryButtonAction(data) {
  return (dispatch) => {
    dispatch(fetchData(data));
  };
}
