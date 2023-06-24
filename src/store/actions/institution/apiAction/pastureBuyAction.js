import { LOGIN_UESR_PASTURE_DATA, LOGIN_USER_DATA } from '../../types';
import axios from 'axios';
import { API } from '../../../../utils/config';
import Toast from 'react-native-root-toast';

export const pastureData = (pasture) => {
  return {
    type: LOGIN_UESR_PASTURE_DATA,
    payload: pasture,
  }
};

export const userData = (user) => {
    return {
      type: LOGIN_USER_DATA,
      payload: user,
    }
  };

export function pastureBuyAction(pastureBuyData) {
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    return await axios.post(API+"leveluppasture",{
      data: pastureBuyData
    },  
    {
      headers:{Authorization: token}
    })
    .then(res => {
      if(!res.data.message){
        dispatch(pastureData(res.data.data[0]));
        dispatch(userData(res.data.user[0]));
      }else{
        let toast = Toast.show(res.data.message, {
            duration: Toast.durations.LONG, 
        });
        setTimeout(function hideToast() {
        Toast.hide(toast);
        }, 2000);
    };
    })
    .catch(error => {
      throw(error);
    });
  }
};
