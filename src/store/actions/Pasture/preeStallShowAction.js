import { PREESET_STALL_DATA, PREESET_STALL_NAMES } from "../types";
import axios from "axios";
import { API } from "../../../utils/config";

export const stallData = (stallReservationData) => {
  return {
    type: PREESET_STALL_DATA,
    payload: stallReservationData,
  };
};

export const stallNameData = (stallReservationNameData) => {
  return {
    type: PREESET_STALL_NAMES,
    payload: stallReservationNameData,
  };
};

export function preeStallShowAction(preeStallSetData) {
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    return await axios
      .post(
        API + "showpresetstall",
        {
          data: preeStallSetData,
        },
        {
          headers: { Authorization: token },
        }
      )
      .then((res) => {
        dispatch(stallData(res.data.data));
        dispatch(stallNameData(res.data.preset_names));
      })
      .catch((error) => {
        throw error;
      });
  };
}
