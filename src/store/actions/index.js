import { FETCH_GITHUB_DATA } from './types';
import axios from 'axios';
import { API } from '../../utils/config';
import Toast from 'react-native-root-toast';

export const fetchData = (data) => {
  return {
    type: FETCH_GITHUB_DATA,
    data
  }
};

export const loginAction = (data) => {
  return (dispatch) => {
    return axios.post(API+"user", {
       data: data
    })
      .then(res => {
        console.log(res.data.token);
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