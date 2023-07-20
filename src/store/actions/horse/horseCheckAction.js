import { HORSE_CHECK_DATA, HORSE_CHECK_AGE} from '../types';

export const horseData = (data) => {
    return {
      type: HORSE_CHECK_DATA,
      payload: data,
    }
  };
  
  export const horseAgeData = (age) => {
    return {
      type: HORSE_CHECK_AGE,
      payload: age,
    }
  };
  
export function horseCheckAction(horseCheckData, ChackAge) {
    return (dispatch) => {
      try {
        dispatch(horseData(horseCheckData))
        dispatch(horseAgeData(ChackAge))
      } catch (error) {
        throw error;
      }
    };
  }
