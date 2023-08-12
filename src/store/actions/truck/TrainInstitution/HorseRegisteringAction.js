import { REGISTERING_DATA } from "../../types";
import axios from "axios";
import { API } from "../../../../utils/config";

// RANCH DISPATCH
export const registerData = (data) => {
  return {
    type: REGISTERING_DATA,
    payload: data,
  };
};

export function HorseRegisteringAction(date) {
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    return await axios
      .post(
        API + "getregisterstate",
        {
          data: date,
        },
        {
          headers: { Authorization: token },
        }
      )
      .then((res) => {
        dispatch(registerData(res.data.data));
      })
      .catch((error) => {
        throw error;
      });
  };
}
