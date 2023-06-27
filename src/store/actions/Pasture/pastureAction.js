import { HORSE_SAVE_DATA } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';

export const horseData = (data) => {
    return {
      type: HORSE_SAVE_DATA,
      payload: data,
    }
  };

export function pastureAction({user_id, pasture_id}){
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    const getDomain = `horse?user_id=${user_id}&pasture_id=${pasture_id}`;
    return await axios.get(API+ getDomain,
    {
      headers:{Authorization: token}
    }
    )
    .then(res => {
      dispatch(horseData(res.data.data));
    })
      .catch(error => {
        throw(error);
      });
  };
};