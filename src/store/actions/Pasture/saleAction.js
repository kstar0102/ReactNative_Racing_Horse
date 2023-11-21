import axios from 'axios';
import { API } from '../../../utils/config';
import { 
  LOGIN_USER_DATA, 
  HORSE_SAVE_DATA, 
  SALE_HORSE_SAVE_DATA 
} from '../types';

export const saveUserData = (user) => {
    return {
      type: LOGIN_USER_DATA,
      payload: user,
    }
};

export const saveHorseData = (data) => {
  return {
    type: HORSE_SAVE_DATA,
    payload: data,
  }
};

export const saveSaleHorseData = (data) => {
  return {
    type: SALE_HORSE_SAVE_DATA,
    payload: data
  }
}

export const updateSaleStateAction = (horse_id, user_id, pasture_id) => async (dispatch, getState) => {

  const token = getState().tokenData.tokenData;

  return await axios
  .post(
    API + "auction",
    {
        horse_id: horse_id,
        user_id: user_id, 
        pasture_id: pasture_id
    },
    {
      headers: { Authorization: token },
    }
  )
  .then(res => {
    if (!res.data.message) {
        console.log("***********************************************");
        console.log(res.data.user[0]);
        console.log(res.data.horses);
        console.log("***********************************************");
        dispatch(saveUserData(res.data.user[0]));
        dispatch(saveHorseData(res.data.horses));
      }
  })
  .catch(error => {
    throw(error);
  });
};

export const getSaleHorseDataAction = () => async (dispatch, getState) => {

  const token = getState().tokenData.tokenData;

  return await axios
  .get(
    API + `auction`,
    {
      headers: { Authorization: token },
    }
  )
  .then(res => {
    if (!res.data.message) {
        dispatch(saveSaleHorseData(res.data.sale_horse));
      }
  })
  .catch(error => {
    throw(error);
  });
};

export const updateAuctionAction = (id, user_id, bidAmount) => async (dispatch, getState) => {

  const token = getState().tokenData.tokenData;

  return await axios
  .put(
    API + `auction/${id}`,
    {
      bidder: user_id, 
      bid_amount: bidAmount
    },
    {
      headers: { Authorization: token },
    }
  )
  .then(res => {
    // if (!res.data.message) {
    //     console.log("***********************************************");
    //     console.log(res.data.user[0]);
    //     console.log(res.data.horses);
    //     console.log("***********************************************");
    //     dispatch(saveUserData(res.data.user[0]));
    //     dispatch(saveHorseData(res.data.horses));
    //   }
  })
  .catch(error => {
    throw(error);
  });
};