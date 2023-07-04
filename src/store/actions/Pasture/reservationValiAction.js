import { RESERVATION_DATA } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';

export const fetchData = (reservationData) => {
  return {
    type: RESERVATION_DATA,
    payload: reservationData,
  }
};

export function reservationValiAction(reservationData) {
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    
    return await axios.post(API+"getreservemenu",{
      data: reservationData
    },
    {
      headers:{Authorization: token}
    })
    .then(res => {
      dispatch(fetchData(res.data.data))
    })
    .catch(error => {
      throw(error);
    });
  }
};
