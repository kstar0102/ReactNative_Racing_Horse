import { PREESET_PASTURE_DATA, PREESET_PASTURE_NAMES } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';

export const fetchData = (reservationData) => {
  return {
    type: PREESET_PASTURE_DATA,
    payload: reservationData,
  }
};

export const fetchNameData = (reservationNameData) => {
  return {
    type: PREESET_PASTURE_NAMES,
    payload: reservationNameData,
  }
};


export function preePastureSetAction(preeSetData) {
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    return await axios.post(API+"storepreset",{
      data: preeSetData
    },
    {
      headers:{Authorization: token}
    })
    .then(res => {
      dispatch(fetchData(res.data.data))
      dispatch(fetchNameData(res.data.preset_names))
    })
    .catch(error => {
      throw(error);
    });
  }
};
