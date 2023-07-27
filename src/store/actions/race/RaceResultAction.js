import {RACE_RESULT_DATA} from '../types';

export const raceResult = (data) => {
    return {
      type: RACE_RESULT_DATA,
      payload: data,
    }
  };
  
export function RaceResultAction(result) {
    return (dispatch) => {
      try {
        dispatch(raceResult(result))
      } catch (error) {
        throw error;
      }
    };
  }
