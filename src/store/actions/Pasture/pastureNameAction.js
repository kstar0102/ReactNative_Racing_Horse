import { PASTURE_NAME_DATA, PASTURE_NAME_NO, PASTURE_NAMEMEAN_NO } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';

export const fetchData = (validationData) => {
  return {
    type: PASTURE_NAME_DATA,
    payload: validationData,
  }
};

export const nameUnunique = (data) => {
  return {
    type: PASTURE_NAME_NO,
    payload: data,
  }
}

export const nameMeanUnunique = (data) => {
  return {
    type: PASTURE_NAMEMEAN_NO,
    payload: data,
  }
}

export function pastureNameAction(validationData){
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    return await axios.post(API+"checkPastureName", {
      data: validationData
    },
    {
      headers:{Authorization: token}
    }
    )
      .then(res => {
        if(res.data.message === 'noName'){
          dispatch(nameUnunique('noName'));
        }
        else if(res.data.message === 'noNameMean'){
          dispatch(nameMeanUnunique('noName'));
          dispatch(nameUnunique(''));
        }
       else{
        dispatch(nameMeanUnunique(''));
        dispatch(fetchData(validationData))
       }
         
      })
      .catch(error => {
        throw(error);
      });
  };
};