import { HORSE_NAME_ILLEGAL } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';

export const horseNameIllegal = (nameCheckData) => {
  return {
    type: HORSE_NAME_ILLEGAL,
    payload: nameCheckData,
  }
};

export function horseNameIllegalAction(horseNameData) {
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    return await axios.post(API + "checkIllegalHorseName", {
      data: horseNameData
    },
      {
        headers: { Authorization: token }
      })
      .then(res => {
        dispatch(horseNameIllegal(res.data.data))
      })
      .catch(error => {
        throw (error);
      });
  }
};