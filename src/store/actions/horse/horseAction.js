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
    return async (getState) => {
      const token = getState().tokenData.tokenData;
      return await axios.post(API+"horse",{
        data: horseNameData
      },
      {
        headers:{Authorization: token}
      })
      .then(res => {
      })
      .catch(error => {
        throw(error);
      });
    }
  };