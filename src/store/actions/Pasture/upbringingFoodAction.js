import axios from 'axios';
import { LOGIN_USER_DATA } from '../types';
import { API } from '../../../utils/config';

export const userData = (user) => {
  return {
    type: LOGIN_USER_DATA,
    payload: user,
  }
};


export function upbringingFoodAction(upbrginFoodData) {
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    
    return await axios.post(API+"improvetrain",{
      data: upbrginFoodData
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
