import { SHOW_HORSE_GROW } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';
import Toast from 'react-native-root-toast';

export const showGrowData = (selectData) => {
  return {
    type: SHOW_HORSE_GROW,
    payload: selectData,
  }
};

export function showHorseGrow(horseSelecata) {
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    return await axios.post(API + "showHorseGrow", {
      data: horseSelecata
    },
      {
        headers: { Authorization: token }
      })
      .then(res => {
          dispatch(showGrowData(res.data.data))
      })
      .catch(error => {
        throw (error);
      });
  }
};