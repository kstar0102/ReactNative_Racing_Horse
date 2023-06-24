import { GET_THIS_WEEK_RACE_PLAN, GET_BEFOR_WEEK_RACE_PLAN, GET_NEXT_NEXT_WEEK_RACE_PLAN, GET_LAST_WEEK_RACE_PLAN, GET_NEXT_WEEK_RACE_PLAN } from '../../types';
import axios from 'axios';
import { API } from '../../../../utils/config';

export const thisRaceData = (data) => {
    return {
      type: GET_THIS_WEEK_RACE_PLAN,
      payload: data,
    }
  };
  export const beforRaceData = (data) => {
    return {
      type: GET_BEFOR_WEEK_RACE_PLAN,
      payload: data,
    }
  };

  export const nextNextRaceData = (data) => {
    return {
      type: GET_NEXT_NEXT_WEEK_RACE_PLAN,
      payload: data,
    }
  };

  export const nextRaceData = (data) => {
    return {
      type: GET_NEXT_WEEK_RACE_PLAN,
      payload: data,
    }
  };

  export const lastRaceData = (data) => {
    return {
      type: GET_LAST_WEEK_RACE_PLAN,
      payload: data,
    }
  };


export function raceAction(){
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    return await axios.get(API+'getraceplan',
    {
      headers:{Authorization: token}
    }
    )
    .then(res => {
        dispatch(thisRaceData(res.data.this_week_data));
        dispatch(beforRaceData(res.data.before_last_week_data));
        dispatch(nextNextRaceData(res.data.next_next_week_data));
        dispatch(nextRaceData(res.data.next_week_data));
        dispatch(lastRaceData(res.data.last_week_data));
    })
      .catch(error => {
        throw(error);
      });
  };
};