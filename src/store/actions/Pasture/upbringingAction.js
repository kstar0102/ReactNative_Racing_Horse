import { LOGIN_USER_DATA } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';

export const userData = (user) => {
  return {
    type: LOGIN_USER_DATA,
    payload: user,
  }
};



export function upbringingAction(upbrginData) {
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    return await axios.post(API+"feedtrain",{
      data: upbrginData
    },  
    {
      headers:{Authorization: token}
    })
    .then(res => {
      dispatch(userData(res.data.data[0]));
      
    })
    .catch(error => {
      throw(error);
    });
  }
};
