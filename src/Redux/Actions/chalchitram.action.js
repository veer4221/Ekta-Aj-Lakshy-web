import { chalchitramConstants, jobConstruct } from "../constants";
import {
  addJobAPI,
  getAllEktaLatestVideoAPI,
  getAllEktaVideoByCategoryAPI,
  getAllJobsAPI,
  getAllRandomeVideoAPI,
  getCourseVideoesAPI,
  getHistoryVideoesAPI,
  getJobAPI,
  getMyJobAPI,
} from "../../api/index";
import axios from "../../helper/axios";

export const addJobAction = (record) => {
  return async (dispatch) => {
    dispatch({ type: jobConstruct.ADD_JOB_REQUEST });
    const res = await addJobAPI(record);

    if (res.status === 200) {
      dispatch({
        type: jobConstruct.ADD_JOB_SUCCESS,
        payload: {
          message: "job created",
        },
      });
    }
  };
};
export const getCourseVideoesAction = (id, page, limit) => {
  return async (dispatch) => {
    dispatch({ type: chalchitramConstants.GET_COURSE_VIDEOES_REQUEST });
    const res = await getCourseVideoesAPI(id, page, limit);
    if (res.status === 200) {
      dispatch({
        type: chalchitramConstants.GET_COURSE_VIDEOES_SUCCESS,
        payload: res.data,
      });
    }
  };
};
export const getHistoryVideoesAction = (id, page, limit) => {
  return async (dispatch) => {
    dispatch({ type: chalchitramConstants.GET_HISTORY_VIDEOES_REQUEST });
    const res = await getHistoryVideoesAPI(id, page, limit);
    if (res.status === 200) {
      dispatch({
        type: chalchitramConstants.GET_HISTORY_VIDEOES_SUCCESS,
        payload: res.data,
      });
    }
  };
};
export const cleanCategoryVideoAction = () => async (dispatch) =>
  dispatch({ type: chalchitramConstants.CLEAN_CATEGORY_DATA });

export const selectCategoryAction = (category) => async (dispatch) =>
  dispatch({ type: chalchitramConstants.SELECTED_CATEGORY, payload: category });

export const getAllCategoryVideoesAction = (page, limit, category) => {
  return async (dispatch) => {
    dispatch({ type: chalchitramConstants.GET_ALL_CATEGORY_VIDEO_REQUEST });
    const res = await getAllEktaVideoByCategoryAPI(page, limit, category);

    if (res.status === 200) {
      const { count, rows } = res.data;
      dispatch({
        type: chalchitramConstants.GET_ALL_CATEGORY_VIDEO_SUCCESS,
        payload: {
          count,
          rows,
        },
      });
    }
  };
};
export const getAllLatestVideoesAction = (page, limit) => {
  return async (dispatch) => {
    dispatch({ type: chalchitramConstants.GET_ALL_LATEST_VIDEO_REQUEST });
    const res = await getAllEktaLatestVideoAPI(page, limit);

    if (res.status === 200) {
      const { count, rows } = res.data;
      dispatch({
        type: chalchitramConstants.GET_ALL_LATEST_VIDEO_SUCCESS,
        payload: {
          count,
          rows,
        },
      });
    }
  };
};
export const getAllVideoesAction = (page, limit) => {
  return async (dispatch) => {
    dispatch({ type: chalchitramConstants.GET_ALL_RANDOM_VIDEO_REQUEST });
    const res = await getAllRandomeVideoAPI(page, limit);

    if (res.status === 200) {
      const { count, rows } = res.data;
      dispatch({
        type: chalchitramConstants.GET_ALL_RANDOM_VIDEO_SUCCESS,
        payload: {
          count,
          rows,
        },
      });
    }
  };
};

export const getMyJobsAction = () => {
  return async (dispatch) => {
    dispatch({ type: jobConstruct.GET_MY_JOB_REQUEST });
    const res = await getMyJobAPI();
    console.log(res.data.Job);
    if (res.status === 200 && res.data.success) {
      const { count, rows } = res.data.Job;
      dispatch({
        type: jobConstruct.GET_MY_JOB_SUCCESS,

        payload: {
          count,
          rows,
        },
      });
    }
  };
};
export const getJobAction = (id) => {
  return async (dispatch) => {
    dispatch({ type: jobConstruct.GET_JOB_REQUEST });
    const res = await getJobAPI(id);
    console.log(res);
    if (res.status === 200 && res.data.success == true) {
      const { Job } = res.data;
      dispatch({
        type: jobConstruct.GET_JOB_SUCCESS,

        payload: {
          Job,
        },
      });
    }
  };
};
