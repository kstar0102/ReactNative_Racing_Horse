import { HORSE_ALL_DATA } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';

export const horseData = (allData) => {
    return {
      type: HORSE_ALL_DATA,
      payload: allData,
    }
  };
  
  export function horseRandAction() {
    return async (dispatch, getState) => {
      const token = getState().tokenData.tokenData;
      return await axios.get(API+"horserand",
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
