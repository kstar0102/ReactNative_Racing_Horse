import { DIMENSIONS_SIZE } from "../types";

export const dimensionsData = (pasture) => {
  return {
    type: DIMENSIONS_SIZE,
    payload: pasture,
  };
};

export const dimensionsAction = (dimensions) => {
  return async (dispatch) => {
    dispatch(dimensionsData(dimensions));
  };
};
