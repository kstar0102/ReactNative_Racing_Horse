import { MARRY_FUNTION_CALL } from "../types";

export const fetchData = (data) => {
  return {
    type: MARRY_FUNTION_CALL,
    payload: data,
  };
};

export function funtionCallAction(data) {
  console.log(data);
  return (dispatch) => {
    dispatch(fetchData(data));
  };
}
