import { LOGIN_USER_DATA, PASTURE_DATA, LOGIN_USER_TOKEN_DATA } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';
import Toast from 'react-native-root-toast';

export const pastureData = (pasture) => {
  return {
    type: PASTURE_DATA,
    payload: pasture,
  }
};

export const tokenData = (dataToken) => {
  return {
    type: LOGIN_USER_TOKEN_DATA,
    payload: dataToken,
  }
};

export const userData = (user) => {
  return {
    type: LOGIN_USER_DATA,
    payload: user,
  }
};

export const loginAction = (auth) => {
  return async (dispatch) => {
    return await axios.post(API+"user", {
       data: auth
    })
      .then(res => {
        if(res.data.token != null){
            dispatch(tokenData(res.data.token));
            dispatch(pastureData(res.data.pasture));
            dispatch(userData(res.data.user));
        }
        else{
          let toast = Toast.show('Invalid UserID or Passwpord', {
            duration: Toast.durations.LONG, 
          });
          setTimeout(function hideToast() {
            Toast.hide(toast);
          }, 2000);
        }
      })
      .catch(error => {
        throw(error);
      });
  };
};
