import { GENDER_REGISTER } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';

// export const fetchData = (validationData) => {
//   return {
//     type: PASTURE_NAME_DATA,
//     payload: validationData,
//   }
// };

export function JockeyRegisterAction(jocKeyData){
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    return await axios.post(API+"storejockey", {
      data: jocKeyData
    },
    {
      headers:{Authorization: token}
    }
    )
      .then(res => {
        // dispatch(fetchData(validationData))
      })
      .catch(error => {
        throw(error);
      });
  };
};