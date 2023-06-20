import { LOGIN_USER_DATA } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';
import Toast from 'react-native-root-toast';

export const fetchData = (auth) => {
  return {
    type: LOGIN_USER_DATA,
    payload: auth,
  }
};

export const loginAction = (auth) => {
  return (dispatch) => {
    return axios.post(API+"user", {
       data: auth
    })
      .then(res => {
        if(res.data.token != null){
          dispatch(fetchData(res.data))
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
