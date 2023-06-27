import { LONGIFIELD_BUY_DATA,  POOL_BUY_DATA, ROAD_BUY_DATA, TRUCK_BUY_DATA} from '../types';
import axios from 'axios';
import { API } from '../../../utils/config';

// RANCH DISPATCH
export const longiFieldData = (longiField) => {
    return {
        type: LONGIFIELD_BUY_DATA,
        payload: longiField,
    }
};

// POOL DISPATCH
export const poolData = (pool) => {
    return {
        type: POOL_BUY_DATA,
        payload: pool,
    }
};

// SLOPE DISPATCH
export const roadData = (road) => {
    return {
        type: ROAD_BUY_DATA,
        payload: road,
    }
};

// TRUCK DISPATCH
export const truckData = (truck) => {
    return {
        type: TRUCK_BUY_DATA,
        payload: truck,
    }
};

export function institutionAction(institutionData) {
    return async (dispatch, getState) => {
        const token = getState().tokenData.tokenData;
        return await axios.post(API + "getbuildingdata", {
            data: institutionData
        },
            {
                headers: { Authorization: token }
            })
            .then(res => {
                dispatch(poolData(res.data.pool));
                dispatch(longiFieldData(res.data.ranch));
                dispatch(roadData(res.data.slope));
                dispatch(truckData(res.data.truck));
            })
            .catch(error => {
                throw (error);
            });
    }
};
