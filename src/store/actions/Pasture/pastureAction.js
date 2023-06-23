import { HORSE_CHECK_ALL_DATA } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';

export const horseData = (data) => {
    return {
      type: HORSE_CHECK_ALL_DATA,
      payload: data,
    }
  };
  
  export const pastureAction = ({ user_id, pasture_id }) => {
    return async (dispatch, getState) => {
      try {
        const token = getState().tokenData.tokenData;
        const getDomain = `horse?user_id=${user_id}&pasture_id=${pasture_id}`;
        const res = await axios.get(API + getDomain, { headers:{ Authorization: token } });
        dispatch(horseData(res.data.data));
      } catch (error) {
        console.error(error);
      }
    }
  };