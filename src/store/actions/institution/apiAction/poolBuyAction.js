import { LOGIN_USER_DATA, POOL_BUY_DATA } from '../../types';
import axios from 'axios';
import { API } from '../../../../utils/config';
import Toast from 'react-native-root-toast';

export const poolData = (pool) => {
    return {
        type: POOL_BUY_DATA,
        payload: pool,
    }
};

export const userData = (user) => {
    return {
        type: LOGIN_USER_DATA,
        payload: user,
    }
};


export function poolBuyAction(poolBuyData) {
    return async (dispatch, getState) => {
        const token = getState().tokenData.tokenData;
        return await axios.post(API + "leveluppool", {
            data: poolBuyData
        },
            {
                headers: { Authorization: token }
            })
            .then(res => {
                if (!res.data.message) {
                    dispatch(poolData(res.data.data));
                    dispatch(userData(res.data.user[0]));
                } else {
                    let toast = Toast.show(res.data.message, {
                        duration: Toast.durations.LONG,
                    });
                    setTimeout(function hideToast() {
                        Toast.hide(toast);
                    }, 2000);
                };
            })
            .catch(error => {
                throw (error);
            });
    }
};
