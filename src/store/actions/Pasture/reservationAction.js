import { RESERVATION_DATA } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';

export function reservationAction(reservationData) {
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    
    return await axios.post(API+"reservefood",{
      data: reservationData
    },
    {
      headers:{Authorization: token}
    })
    .then(res => {
    })
    .catch(error => {
      throw(error);
    });
  }
};
