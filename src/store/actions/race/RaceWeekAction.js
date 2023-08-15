import { LAST_RACE_RESULT_DATA } from "../types";
import axios from "axios";
import { API } from "../../../utils/config";
export const raceData = (data) => {
  return {
    type: LAST_RACE_RESULT_DATA,
    payload: data,
  };
};
export function RaceWeekAction(weekDate) {
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    return await axios
      .post(
        API + "getraceresult",
        {
          data: weekDate,
        },
        {
          headers: { Authorization: token },
        }
      )
      .then((res) => {
        dispatch(raceData(res.data.data));
      })
      .catch((error) => {
        throw error;
      });
  };
}
