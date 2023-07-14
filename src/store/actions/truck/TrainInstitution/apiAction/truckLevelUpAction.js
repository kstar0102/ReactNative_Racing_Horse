import { LOGIN_USER_DATA, TRUCK_LEVELUP_DATA } from '../../../types';
import axios from 'axios';
import { API } from '../../../../../utils/config';
import Toast from 'react-native-root-toast';

export const truckData = (truck) => {
  return {
    type: TRUCK_LEVELUP_DATA,
    payload: truck,
  }
};

export const userData = (user) => {
  return {
    type: LOGIN_USER_DATA,
    payload: user,
  }
};


export function truckLevelUpAction(truckBuyData) {
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    return await axios.post(API + "leveluptruckstall", {
      data: truckBuyData
    },
      {
        headers: { Authorization: token }
      })
      .then(res => {
        if (!res.data.message) {
          dispatch(truckData(res.data.data));
          dispatch(userData(res.data.user[0]));
        } else {
          let toast = Toast.show(res.data.message, {
            duration: Toast.durations.LONG,
          });
          setTimeout(function hideToast() {
            Toast.hide(toast);
          }, 2000);
        };
      })
      .catch(error => {
        throw (error);
      });
  }
};
