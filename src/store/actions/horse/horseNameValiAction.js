import { HORSE_NAME_VALIDATION } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';

export const horseNameVali = (nameCheckData) => {
  return {
    type: HORSE_NAME_VALIDATION,
    payload: nameCheckData,
  }
};

export function horseNameValiAction(horseNameData) {
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    return await axios.post(API + "checkHorseName", {
      data: horseNameData
    },
      {
        headers: { Authorization: token }
      })
      .then(res => {
        dispatch(horseNameVali(res.data.data))
      })
      .catch(error => {
        throw (error);
      });
  }
};