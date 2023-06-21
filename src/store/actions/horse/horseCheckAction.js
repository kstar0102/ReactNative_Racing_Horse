import { HORSE_CHECK_DATA} from '../types';

export const horseData = (data) => {
    return {
      type: HORSE_CHECK_DATA,
      payload: data,
    }
  };
  
export function horseCheckAction(horseCheckData) {
    return (dispatch) => {
      try {
        dispatch(horseData(horseCheckData))
      } catch (error) {
        throw error;
      }
    };
  }
