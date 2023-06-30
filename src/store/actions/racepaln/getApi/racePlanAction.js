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


export function raceAction(gameTime) {

  const before_date = new Date(gameTime.getTime() - (7 * 24 * 60 * 60 * 1000));
  const before_date_month = before_date.getMonth() + 1;
  const lastWeekNumber = Math.ceil(before_date.getDate() / 7);

  const before_before_date = new Date(gameTime.getTime() - (14 * 24 * 60 * 60 * 1000));
  const before_before_date_month = before_before_date.getMonth() + 1;
  const last_last_week_number = Math.ceil(before_before_date.getDate() / 7);

  const current_date = new Date(gameTime.getTime());
  const current_date_month = current_date.getMonth() + 1;
  const week_number = Math.ceil(current_date.getDate() / 7);

  const next_date = new Date(gameTime.getTime() + (7 * 24 * 60 * 60 * 1000));
  let next_date_month = next_date.getMonth() + 1;
  let nextWeekNumber = Math.ceil(next_date.getDate() / 7);
  if (nextWeekNumber == 5) {
    next_date_month = next_date.getMonth() + 2;
    nextWeekNumber = 1;
  }

  const next_next_date = new Date(gameTime.getTime() + (14 * 24 * 60 * 60 * 1000));
  const next_next_date_month = next_next_date.getMonth() + 1;
  const next_next_week_number = Math.ceil(before_before_date.getDate() / 7);


  const timeData = {
    'this_month_week': current_date_month + "-" + week_number,
    'before_month_week': before_date_month + "-" + lastWeekNumber,
    'before_before_month_week': before_before_date_month + "-" + last_last_week_number,
    'next_month_week': next_date_month + "-" + nextWeekNumber,
    'next_next_month_week': next_next_date_month + "-" + next_next_week_number
  }

  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    return await axios.post(API + 'getraceplan',
      {
        data: timeData
      },
      {
        headers: { Authorization: token },

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
        throw (error);
      });
  };
};