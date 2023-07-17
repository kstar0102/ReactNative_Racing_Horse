import { LOGIN_USER_DATA, GET_RACE_REGISTER_DATA } from "../types";
import axios from "axios";
import { API } from "../../../utils/config";
import Toast from "react-native-root-toast";

// export const raceData = (data) => {
//     return {
//         type: GET_RACE_CORSE_DATA,
//         payload: data,
//     }
// };
// export const prizeData = (data) => {
//     return {
//         type: GET_RACE_PRIZE_DATA,
//         payload: data,
//     }
// };

// export const jockeysData = (data) => {
//     return {
//         type: GET_RACE_JOCKEYS_DATA,
//         payload: data,
//     }
// };

export const raceRegisterData = (data) => {
  return {
    type: GET_RACE_REGISTER_DATA,
    payload: data,
  };
};

export const userData = (user) => {
  return {
    type: LOGIN_USER_DATA,
    payload: user,
  };
};

export function RaceRegisterSaveAction(seveAllData) {
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    return await axios
      .post(
        API + "storeraceregister",
        {
          data: seveAllData,
        },
        {
          headers: { Authorization: token },
        }
      )
      .then((res) => {
        if (!res.data.message) {
          dispatch(raceRegisterData(res.data.race_register_data));
          dispatch(userData(res.data.user[0]));
        } else {
          let toast = Toast.show("登録できません。", {
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
