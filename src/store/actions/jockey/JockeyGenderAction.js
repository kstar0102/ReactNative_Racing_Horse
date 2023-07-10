import {GENDER_REGISTER} from '../types';

export const JocKeyGenderData = (data) => {
    return {
      type: GENDER_REGISTER,
      payload: data,
    }
  };
  
export function JockeyGenderAction(GenderData) {
    return (dispatch) => {
      try {
        dispatch(JocKeyGenderData(GenderData))
      } catch (error) {
        throw error;
      }
    };
  }
