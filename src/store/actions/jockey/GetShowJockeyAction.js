import { SHOW_JOCKEY } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';

export const fetchData = (data) => {
  return {
    type: SHOW_JOCKEY,
    payload: data,
  }
};

export function GetShowJockeyAction(userId){
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    return await axios.post(API+"showjockey", {
      data: userId
    },
    {
      headers:{Authorization: token}
    }
    )
      .then(res => {
        dispatch(fetchData(res.data.data[0]));
      })
      .catch(error => {
        throw(error);
      });
  };
};