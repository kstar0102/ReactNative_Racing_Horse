// import { JOCKEY_NAME_REGISTER } from '../types';

// export const JockeynameData = (data) => {
//     return {
//       type: JOCKEY_NAME_REGISTER,
//       payload: data,
//     }
//   };
  
// export function JockeyNameAction(nameData) {
//     return (dispatch) => {
//       try {
//         dispatch(JockeynameData(nameData))
//       } catch (error) {
//         throw error;
//       }
//     };
//   }

import { JOCKEY_NAME_REGISTER } from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';
import Toast from 'react-native-root-toast';



export const JockeynameData = (data) => {
    return {
      type: JOCKEY_NAME_REGISTER,
      payload: data,
    }
  };
  

export function JockeyNameAction(nameData){
  return async (dispatch, getState) => {
    const token = getState().tokenData.tokenData;
    return await axios.post(API+"namecheckjockey", {
      data: nameData
    },
    {
      headers:{Authorization: token}
    }
    )
      .then(res => {
        if (res.data.message == "success") {
          dispatch(JockeynameData(res.data.name));
        } else {
           dispatch(JockeynameData(res.data.name));
          let toast = Toast.show(res.data.message, {
            duration: Toast.durations.LONG,
          });
          setTimeout(function hideToast() {
            Toast.hide(toast);
          }, 2000);
        };
      })
      .catch(error => {
        throw(error);
      });
  };
};
