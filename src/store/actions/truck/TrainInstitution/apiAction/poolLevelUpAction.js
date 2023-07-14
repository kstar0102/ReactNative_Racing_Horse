import { POOL_LEVELUP_DATA, LOGIN_USER_DATA } from '../../../types';

import axios from 'axios';
import { API } from '../../../../../utils/config';
import Toast from 'react-native-root-toast';

export const poolLevelUpData = (pool) => {
    return {
        type: POOL_LEVELUP_DATA,
        payload: pool,
    }
};

export const userData = (user) => {
    return {
        type: LOGIN_USER_DATA,
        payload: user,
    }
};

export function poolLavelUpAction(poolData) {
    return async (dispatch, getState) => {
        const token = getState().tokenData.tokenData;
        return await axios.post(API + "leveluppoolstall", {
            data: poolData
        },
            {
                headers: { Authorization: token }
            })
            .then(res => {
                if (!res.data.message) {
                    dispatch(poolLevelUpData(res.data.data));
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
