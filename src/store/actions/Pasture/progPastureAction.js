import { LOGIN_USER_DATA, HORSE_SAVE_DATA } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';

export const saveUserData = (user) => {
    return {
      type: LOGIN_USER_DATA,
      payload: user,
    }
};

export const saveHorseData = (data) => {
  return {
    type: HORSE_SAVE_DATA,
    payload: data,
  }
};


export const progPastureAction = (progPastureChildData) => async (dispatch, getState) => {

  const token = getState().tokenData.tokenData;
  
  return await axios
  .post(
    API + "storechild",
    {
      data: progPastureChildData,
    },
    {
      headers: { Authorization: token },
    }
  )
  .then(res => {
    if (!res.data.message) {
      console.log("***********************************************");
      console.log(res.data.user[0]);
      console.log("***********************************************");
      dispatch(saveUserData(res.data.user[0]));
    }
  })
  .catch(error => {
    throw(error);
  });
};