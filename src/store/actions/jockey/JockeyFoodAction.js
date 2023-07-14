import axios from 'axios';
import { LOGIN_USER_DATA, SHOW_JOCKEY, ARROW_POSITION_STATE } from '../types';
import { API } from '../../../utils/config';

export const userData = (user) => {
  return {
    type: LOGIN_USER_DATA,
    payload: user,
  }
};

export const JockeyUpdateData = (data) => {
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



export function JockeyFoodAction(jockeyData) {
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    
    return await axios.post(API+"improvejockey",{
      data: jockeyData
    },  
    {
      headers:{Authorization: token}
    })
    .then(res => {
      dispatch(userData(res.data.data[0]));
      dispatch(JockeyUpdateData(res.data.jockey[0]));
      dispatch(arrowData(jockeyData));
    })
    .catch(error => {
      throw(error);
    });
  }
};
