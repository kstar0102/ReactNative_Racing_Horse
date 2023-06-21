import { HORSE_ALL_DATA } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';

export const horseData = (allData) => {
    return {
      type: HORSE_ALL_DATA,
      payload: allData,
    }
  };
  
  export function horseSelectAction(horseSelectData) {
    return async (dispatch, getState) => {
      const token = getState().auth.token;
      return await axios.get(API+"getlineage?age="+ horseSelectData,{
        data: horseSelectData
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
