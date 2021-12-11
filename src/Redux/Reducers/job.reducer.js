/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */

import { jobConstruct } from "../constants";

const initState = {
  error: null,
  message: "",
  getJob: {},
  loading: false,
  getMyJob: {
    count: null,
    rows: [],
  },
  getAllJobs: {
    count: null,
    rows: [],
  },
};

export default (state = initState, action) => {
  switch (action.type) {
    case jobConstruct.ADD_JOB_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case jobConstruct.ADD_JOB_SUCCESS:
      console.log(action);
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    case jobConstruct.GET_ALL_JOBS_REQUEST:
      console.log(action);
      state = {
        ...state,
        loading: true,
      };
      break;
    case jobConstruct.GET_ALL_JOBS_SUCCESS:
      console.log(action);
      state = {
        ...state,
        loading: false,
        getAllJobs: action.payload,
      };
      break;
    case jobConstruct.GET_MY_JOB_REQUEST:
      console.log(action);
      state = {
        ...state,
        loading: true,
      };
      break;
    case jobConstruct.GET_MY_JOB_SUCCESS:
      console.log(action);
      state = {
        ...state,
        loading: false,
        getMyJob: action.payload,
      };
      break;
    case jobConstruct.GET_JOB_REQUEST:
      console.log(action);
      state = {
        ...state,
        loading: true,
      };
      break;
    case jobConstruct.GET_JOB_SUCCESS:
      console.log(action);
      state = {
        ...state,
        loading: false,
        getJob: action.payload.Job,
      };
      break;
  }

  return state;
};
