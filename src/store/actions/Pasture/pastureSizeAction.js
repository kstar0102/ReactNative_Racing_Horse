import { PASTURE_SIZE_DATA, HORSE_ALL_DATA } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';

export const fetchData = (pastureData) => {
  return {
    type: PASTURE_SIZE_DATA,
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
    const token = getState().auth.token;
    
    return await axios.post(API+"pasture",{
      data: pastureData
    },
    {
      headers:{Authorization: token}
    })
    .then(res => {
      dispatch(horseData(res.data))
    })
    .catch(error => {
      throw(error);
    });
  }
};
