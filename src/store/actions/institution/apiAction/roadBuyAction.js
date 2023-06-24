import { LOGIN_USER_DATA, ROAD_BUY_DATA } from '../../types';
import axios from 'axios';
import { API } from '../../../../utils/config';
import Toast from 'react-native-root-toast';

export const roadData = (road) => {
  return {
    type: ROAD_BUY_DATA,
    payload: road,
  }
};

export const userData = (user) => {
  return {
    type: LOGIN_USER_DATA,
    payload: user,
  }
};


export function roadBuyAction(roadBuyData) {
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    return await axios.post(API + "levelupslope", {
      data: roadBuyData
    },
      {
        headers: { Authorization: token }
      })
      .then(res => {
        if (!res.data.message) {
          dispatch(roadData(res.data.data));
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
