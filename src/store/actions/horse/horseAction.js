import { HORSE_NAME_DATA } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';
import Toast from 'react-native-root-toast';

export const horseData = (allData) => {
  return {
    type: HORSE_NAME_DATA,
    payload: allData,
  }
};

export function horseAction(horseNameData) {
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    return await axios.post(API + "savehorse", {
      data: horseNameData
    },
      {
        headers: { Authorization: token }
      })
      .then(res => {
        if (res.data.message) {
          let toast = Toast.show(res.data.message, {
            duration: Toast.durations.LONG,
          });
          setTimeout(function hideToast() {
            Toast.hide(toast);
          }, 2000);
          return false;
        }else{
          dispatch(horseData(res.data.data))
        }
      })
      .catch(error => {
        throw (error);
      });
  }
};