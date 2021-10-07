import { jobConstruct } from "../constants";
import { addJobAPI, getAllJobsAPI, getJobAPI } from "../../api/index";
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

export const getAllJobsAction = (state, district, city, page, limit) => {
  return async (dispatch) => {
    dispatch({ type: jobConstruct.GET_ALL_JOBS_REQUEST });
    const res = await getAllJobsAPI(state, district, city, page, limit);

    if (res.status === 200) {
      const { count, rows } = res.data;
      dispatch({
        type: jobConstruct.GET_ALL_JOBS_SUCCESS,

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
