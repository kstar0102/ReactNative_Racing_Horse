import { SHOW_JOCKEY, LOGIN_USER_DATA } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';

export const fetchData = (data) => {
  return {
    type: SHOW_JOCKEY,
    payload: data,
  }
};

export const userData = (user) => {
  return {
    type: LOGIN_USER_DATA,
    payload: user,
  }
};

export function JockeyRegisterAction(jocKeyData){
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    return await axios.post(API+"storejockey", {
      data: jocKeyData
    },
    {
      headers:{Authorization: token}
    }
    )
      .then(res => {
        dispatch(userData(res.data.user[0]));
        dispatch(fetchData(res.data.jockey[0]));
      })
      .catch(error => {
        throw(error);
      });
  };
};