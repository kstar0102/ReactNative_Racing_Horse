import { PASTURE_SIZE_DATA } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';
import Toast from 'react-native-root-toast';

export const fetchData = (pastureDatas) => {
  return {
    type: PASTURE_SIZE_DATA,
    payload: pastureDatas,
  }
};

export const pastureSizeAction = (pastureDatas) => {
  console.log(pastureDatas);
  return (getState) => {
    const token = getState().auth.token;
    return axios.post(API+"pasture", {
      data: pastureDatas
    },
    {
      headers:{Authorization: token}
    }
    )
    .then(res => {
    })
    .catch(error => {
      throw(error);
    });
  };
};
