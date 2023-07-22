import {
  LOGIN_USER_DATA,
  ARROW_POSITION_STATE,
  HORSE_SAVE_DATA,
  STABLE_MENU_DATA,
} from "../types";
import axios from "axios";
import { API } from "../../../utils/config";
import Toast from "react-native-root-toast";

export const userData = (user) => {
  return {
    type: LOGIN_USER_DATA,
    payload: user,
  };
};

export const horseData = (horseData) => {
  return {
    type: HORSE_SAVE_DATA,
    payload: horseData,
  };
};

export const stableHorseData = (stalbehorseData) => {
  return {
    type: STABLE_MENU_DATA,
    payload: stalbehorseData,
  };
};

export const arrowData = (arrowState) => {
  return {
    type: ARROW_POSITION_STATE,
    payload: arrowState,
  };
};

export function upbringingAction(upbrginData) {
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    return await axios
      .post(
        API + "feedtrain",
        {
          data: upbrginData,
        },
        {
          headers: { Authorization: token },
        }
      )
      .then((res) => {
        if (!res.data.message) {
          dispatch(userData(res.data.data[0]));
          dispatch(arrowData(upbrginData));
          dispatch(horseData(res.data.horse));
          dispatch(stableHorseData(res.data.horse));
        } else {
          let toast = Toast.show(res.data.message, {
            duration: Toast.durations.LONG,
          });
          setTimeout(function hideToast() {
            Toast.hide(toast);
          }, 2000);
        }
      })
      .catch((error) => {
        throw error;
      });
  };
}
