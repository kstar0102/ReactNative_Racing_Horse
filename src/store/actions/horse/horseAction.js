import { HORSE_NAME_DATA } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';

export const horseData = (allData) => {
    return {
      type: HORSE_NAME_DATA,
      payload: allData,
    }
  };
  
  export function horseAction(horseNameData) {
    return async (dispatch, getState) => {
      const token = getState().auth.token;
      return await axios.post(API+"horse",{
        data: horseNameData
      },
      {
        headers:{Authorization: token}
      })
      .then(res => {
        // dispatch(horseData(res.data))
      })
      .catch(error => {
        throw(error);
      });
    }
  };