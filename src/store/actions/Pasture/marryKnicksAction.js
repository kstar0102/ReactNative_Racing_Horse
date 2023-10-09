import { MARRY_KNICKS_GET } from "../types";
import { API } from '../../../utils/config';
import axios from 'axios';

export const fetchData = (data) => {
  return {
    type: MARRY_KNICKS_GET,
    payload: data,
  };
};

export function knicksAction() {
    return async (dispatch, getState) => {
        const token = getState().tokenData.tokenData;
        const getDomain = `getknicks`;
        return await axios.get(API+ getDomain,
        {
          headers:{Authorization: token}
        }
        )
        .then(res => {
          dispatch(fetchData(res.data.data));
        })
          .catch(error => {
            throw(error);
          });
      };
}
