import { LOGIN_USER_DATA, ARROW_POSITION_STATE, SHOW_JOCKEY } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';

export const userData = (user) => {
  return {
    type: LOGIN_USER_DATA,
    payload: user,
  }
};
 
export const jockeyUpdataData = (data) => {
  return {
    type: SHOW_JOCKEY,
    payload: data,
  }
};

export const arrowData = (arrowState) => {
  return {
    type: ARROW_POSITION_STATE,
    payload: arrowState,
  }
};



export function JockeyGrazingAction(jockeyData) {
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    return await axios.post(API+"growjockey",{
      data: jockeyData
    },  
    {
      headers:{Authorization: token}
    })
    .then(res => {
      dispatch(userData(res.data.data[0]));
      dispatch(arrowData(jockeyData));
      dispatch(jockeyUpdataData(res.data.jockey[0]));
    })
    .catch(error => {
      throw(error);
    });
  }
};
