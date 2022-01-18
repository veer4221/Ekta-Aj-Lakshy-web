/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */

import { chalchitramConstants, jobConstruct } from "../constants";

const initState = {
  error: null,
  message: "",
  getVideoByID: {},
  loading: false,
  getCourseVideo: {
    count: null,
    rows: [],
  },
  getHistoryVideo: {
    count: null,
    rows: [],
  },
  getRandomVideoes: {
    count: null,
    rows: [],
  },
};

export default (state = initState, action) => {
  switch (action.type) {
    case chalchitramConstants.GET_ALL_RANDOM_VIDEO_REQUEST:
      console.log(action);
      state = {
        ...state,
        loading: true,
      };
      break;
    case chalchitramConstants.GET_COURSE_VIDEOES_REQUEST:
      console.log(action);
      state = {
        ...state,
        loading: true,
      };
      break;
    case chalchitramConstants.GET_HISTORY_VIDEOES_SUCCESS:
      console.log(action);
      state = {
        ...state,
        loading: false,
        getHistoryVideo: action.payload,
      };
      break;
    case chalchitramConstants.GET_HISTORY_VIDEOES_REQUEST:
      console.log(action);
      state = {
        ...state,
        loading: true,
      };
      break;
    case chalchitramConstants.GET_HISTORY_VIDEOES_SUCCESS:
      console.log(action);
      state = {
        ...state,
        loading: false,
        getHistoryVideo: action.payload,
      };
      break;
    case chalchitramConstants.GET_ALL_RANDOM_VIDEO_SUCCESS:
      console.log(action);
      state = {
        ...state,
        loading: false,
        getRandomVideoes: {
          count: action.payload.count,
          rows: [...state.getRandomVideoes.rows, ...action.payload.rows],
        },
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
