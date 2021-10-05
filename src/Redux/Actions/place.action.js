import { authConstants, placeConstants, postContants } from "../constants";
import {
  createPostAPI,
  getAllPostAPI,
  getCityAPI,
  getDistrictAPI,
  getPostByIdAPI,
  getStateAPI,
  removePostAPI,
} from "../../api/index";

import axios from "../../helper/axios";

export const resetPostStateAction = () => {
  return async (dispatch) => {
    dispatch({ type: postContants.RESET_STATE });
  };
};
export const getStateAction = () => {
  return async (dispatch) => {
    dispatch({ type: placeConstants.GET_STATE_REQUEST });
    const res = await getStateAPI();
    console.log(res.data);
    const { success } = res.data;

    if (res.status === 200 && success == true) {
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
    const { success } = res.data;

    if (res.status === 200 && success == true) {
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
    const { success } = res.data;

    if (res.status === 200 && success == true) {
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
export const getPostListAction = (page, limit, keyword) => {
  return async (dispatch) => {
    dispatch({ type: postContants.VIEW_ALL_POST_REQUEST });
    console.log("action", keyword);
    const res = await getAllPostAPI(page, limit, keyword);
    const { success } = res.data;

    if (res.status === 200 && success == true) {
      const { count, rows, success } = res.data;
      dispatch({
        type: postContants.VIEW_ALL_POST_SUCCESS,
        payload: { count, rows, success },
      });
    }
    if (res.status === 200 && success == false) {
      const { error } = res.data;

      dispatch({
        type: postContants.VIEW_ALL_POST_FAILURE,
        payload: { error },
      });
    }
  };
};

export const viewPostAction = (id) => {
  return async (dispatch) => {
    dispatch({ type: postContants.VIEW_POST_REQUEST });
    const res = await getPostByIdAPI(id);
    console.log(res.data.post);
    const { success } = res.data;
    if (res.status === 200 && success == true) {
      const { post } = res.data;
      dispatch({
        type: postContants.VIEW_POST_SUCCESS,
        payload: { postInfo: post },
      });
    }
  };
};
