import { getCityAPI, getDistrictAPI, getStateAPI } from "../../api/index";

import axios from "../../helper/axios";
import { placeConstants } from "../constants";

export const getStateAction = () => {
  return async (dispatch) => {
    dispatch({ type: placeConstants.GET_STATE_REQUEST });
    const res = await getStateAPI();
    console.log(res.data);
    // const { success } = res.data;

    if (res.status === 200 && res.data.success == true) {
      const { count, rows, success } = res.data;
      dispatch({
        type: placeConstants.GET_STATE_SUCCESS,
        payload: { count, rows, success },
      });
    }
  };
};
export const getCityAction = (districtid) => {
  return async (dispatch) => {
    dispatch({ type: placeConstants.GET_CITY_REQUEST });
    const res = await getCityAPI(districtid);
    console.log(res.data);
    // const { success } = res.data;

    if (res.status === 200 &&res.data.success== true) {
      const { count, rows, success } = res.data;
      dispatch({
        type: placeConstants.GET_CITY_SUCCESS,
        payload: { count, rows, success },
      });
    }
  };
};
export const getDistrictAction = (state_id) => {
  return async (dispatch) => {
    dispatch({ type: placeConstants.GET_DIST_REQUEST });
    const res = await getDistrictAPI(state_id);
    console.log(res.data);
    // const { success } = res.data;

    if (res.status === 200 && res.data.success == true) {
      const { count, rows, success } = res.data;
      dispatch({
        type: placeConstants.GET_DIST_SUCCESS,
        payload: { count, rows, success },
      });
    }
  };
};
export const cleanCityAction = () => {
  return async (dispatch) => {
    dispatch({ type: placeConstants.CLEAN_CITY });
  };
};
export const cleanDistrictAction = () => {
  return async (dispatch) => {
    dispatch({ type: placeConstants.CLEAN_DISTRICT });
  };
};
export const cleanAllStateAction = () => {
  return async (dispatch) => {
    dispatch({ type: placeConstants.CLEAN_ALL_STATE });
  };
};
