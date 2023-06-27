import { PASTURE_DATA, HORSE_ALL_DATA } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';

export const fetchData = (pastureData) => {
  return {
    type: PASTURE_DATA,
    payload: pastureData,
  }
};

export const horseData = (allData) => {
  return {
    type: HORSE_ALL_DATA,
    payload: allData,
  }
};

export function pastureSizeAction(pastureData) {
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    
    return await axios.post(API+"pasture",{
      data: pastureData
    },
    {
      headers:{Authorization: token}
    })
    .then(res => {
      dispatch(fetchData(res.data.pasture))
      dispatch(horseData(res.data.horse))
    })
    .catch(error => {
      throw(error);
    });
  }
};
