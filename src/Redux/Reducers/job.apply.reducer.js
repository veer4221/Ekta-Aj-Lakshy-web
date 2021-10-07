/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */

import { jobApplyConstants } from "../constants";

const initState = {
  error: null,
  message: "",
  applyForJob: {},
  loading: false,
  applyedUser: {
    count: null,
    rows: [],
  },
};

export default (state = initState, action) => {
  switch (action.type) {
    case jobApplyConstants.JOB_APPLY_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case jobApplyConstants.JOB_APPLY_SUCCESS:
      console.log(action);
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
  }

  return state;
};
