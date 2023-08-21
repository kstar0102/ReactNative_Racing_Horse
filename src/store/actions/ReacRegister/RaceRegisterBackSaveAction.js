import { LOGIN_USER_DATA, GET_RACE_REGISTER_DATA } from "../types";
import axios from "axios";
import { API } from "../../../utils/config";
import Toast from "react-native-root-toast";

export const raceRegisterData = (data) => {
  return {
    type: GET_RACE_REGISTER_DATA,
    payload: data,
  };
};

export function RaceRegisterBackSaveAction(backSaveData) {
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    return await axios
      .post(
        API + "backregister",
        {
          data: backSaveData,
        },
        {
          headers: { Authorization: token },
        }
      )
      .then((res) => {
        dispatch(raceRegisterData(res.data.race_register_data));
        // dispatch(userData(res.data.user));
      })
      .catch((error) => {
        throw error;
      });
  };
}
