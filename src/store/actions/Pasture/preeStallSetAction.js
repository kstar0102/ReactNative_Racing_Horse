import { PREESET_STALL_DATA, PREESET_STALL_NAMES } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';

export const stallData = (stallData) => {
  return {
    type: PREESET_STALL_DATA,
    payload: stallData,
  }
};

export const stallNameData = (stallNameData) => {
  return {
    type: PREESET_STALL_NAMES,
    payload: stallNameData,
  }
};


export function preeStallSetAction(preeStallSetData) {
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    return await axios.post(API+"storepresetstall",{
      data: preeStallSetData
    },
    {
      headers:{Authorization: token}
    })
    .then(res => {
      dispatch(stallData(res.data.data))
      dispatch(stallNameData(res.data.preset_names))
    })
    .catch(error => {
      throw(error);
    });
  }
};
