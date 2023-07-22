import { POOL_LEVELUP_DATA, TRUCK_LEVELUP_DATA, ROAD_LEVELUP_DATA, LONGIFIELD_LEVELUP_DATA, STALL_LEVELUP_DATA } from '../../types';
import axios from 'axios';
import { API } from '../../../../utils/config';

export const longiFieldData = (longiField) => {
    return {
        type: LONGIFIELD_LEVELUP_DATA,
        payload: longiField,
    }
};

export const stallUpData = (stallData) => {
    return {
        type: STALL_LEVELUP_DATA,
        payload: stallData,
    }
};

// POOL DISPATCH
export const poolData = (pool) => {
    return {
        type: POOL_LEVELUP_DATA,
        payload: pool,
    }
};

// SLOPE DISPATCH
export const roadData = (road) => {
    return {
        type: ROAD_LEVELUP_DATA,
        payload: road,
    }
};

// TRUCK DISPATCH
export const truckData = (truck) => {
    return {
        type: TRUCK_LEVELUP_DATA,
        payload: truck,
    }
};

export function InstitutionMenuAction(menuData) {
    return async (dispatch, getState) => {
        const token = getState().tokenData.tokenData;
        return await axios.post(API + "getbuildingdatastall", {
            data: menuData
        },
            {
                headers: { Authorization: token }
            })
            .then(res => {
                dispatch(poolData(res.data.pool));
                dispatch(longiFieldData(res.data.ranch));
                dispatch(roadData(res.data.slope));
                dispatch(truckData(res.data.truck));
                dispatch(stallUpData(res.data.stall));
            })
            .catch(error => {
                throw (error);
            });
    }
};
