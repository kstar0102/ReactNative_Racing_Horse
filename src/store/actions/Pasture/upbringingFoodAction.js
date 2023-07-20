import axios from 'axios';
import { LOGIN_USER_DATA, HORSE_SAVE_DATA, ARROW_POSITION_STATE, STABLE_MENU_DATA } from '../types';
import { API } from '../../../utils/config';

export const userData = (user) => {
  return {
    type: LOGIN_USER_DATA,
    payload: user,
  }
};

export const horseData = (data) => {
  return {
    type: HORSE_SAVE_DATA,
    payload: data,
  }
};

export const stableHorseData = (stalbehorseData) => {
  return {
    type: STABLE_MENU_DATA,
    payload: stalbehorseData,
  }
};

export const arrowData = (arrowState) => {
  return {
    type: ARROW_POSITION_STATE,
    payload: arrowState,
  }
};



export function upbringingFoodAction(upbrginFoodData) {
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    
    return await axios.post(API+"improvetrain",{
      data: upbrginFoodData
    },  
    {
      headers:{Authorization: token}
    })
    .then(res => {
      dispatch(userData(res.data.data[0]));
      dispatch(horseData(res.data.horse));
      dispatch(stableHorseData(res.data.horse));
      dispatch(arrowData(upbrginFoodData));
    })
    .catch(error => {
      throw(error);
    });
  }
};
