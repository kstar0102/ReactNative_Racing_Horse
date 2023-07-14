
import { INSTITUTION_MENU_DATA, LOGIN_USER_DATA } from '../../../types';
import axios from 'axios';
import { API } from '../../../../../utils/config';
import Toast from 'react-native-root-toast';

export const stallUpData = (stall) => {
  return {
    type: INSTITUTION_MENU_DATA,
    payload: stall,
  }
};

export const userData = (user) => {
    return {
      type: LOGIN_USER_DATA,
      payload: user,
    }
  };

export function stallLevelUpAction(stallData) {
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    return await axios.post(API+"levelupstall",{
      data: stallData
    },  
    {
      headers:{Authorization: token}
    })
    .then(res => {
      if(!res.data.message){
        dispatch(stallUpData(res.data.data));
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
