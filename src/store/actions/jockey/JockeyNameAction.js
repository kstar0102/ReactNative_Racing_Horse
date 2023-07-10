import { JOCKEY_NAME_REGISTER } from '../types';

export const JockeynameData = (data) => {
    return {
      type: JOCKEY_NAME_REGISTER,
      payload: data,
    }
  };
  
export function JockeyNameAction(nameData) {
    return (dispatch) => {
      try {
        dispatch(JockeynameData(nameData))
      } catch (error) {
        throw error;
      }
    };
  }
