// import {RACE_RESULT_DATA} from '../types';

// export const raceResult = (data) => {
//     return {
//       type: RACE_RESULT_DATA,
//       payload: data,
//     }
//   };

// export function RaceResultAction(result) {
//     return (dispatch) => {
//       try {
//         dispatch(raceResult(result))
//       } catch (error) {
//         throw error;
//       }
//     };
//   }

import { RACE_RESULT_DATA } from "../types";
import axios from "axios";
import { API } from "../../../utils/config";

export const raceResult = (data) => {
  return {
    type: RACE_RESULT_DATA,
    payload: data,
  };
};

export function RaceResultAction(data, gameTime) {
  const current_date = new Date(gameTime.getTime());
  const current_date_month = current_date.getMonth() + 1;
  const week_number = Math.ceil(current_date.getDate() / 7);

  const timeData = {
    'this_month_week': current_date_month + "-" + week_number,
    data
  }

  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    return await axios
      .post(
        API + "raceresult",
        {
          data: timeData,
        },
        {
          headers: { Authorization: token },
        }
      )
      .then((res) => {
        dispatch(raceResult(data));
      })
      .catch((error) => {
        throw error;
      });
  };
}
