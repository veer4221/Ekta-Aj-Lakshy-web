import { jobApplyConstants } from "../constants";
import { applyForJobAPI,getApplyedUserAPI } from "../../api/index";
import { ConsoleView } from "react-device-detect";

// import axios from "../../helper/axios";

export const jobApplyAction = (record) => {
  return async (dispatch) => {
    dispatch({ type: jobApplyConstants.JOB_APPLY_REQUEST });
    const res = await applyForJobAPI(record);
    console.log(res);
    // if (res.status === 200) {
    //   dispatch({
    //     type: jobApplyConstants.JOB_APPLY_SUCCESS,
    //     payload: {
    //       message: "job created",
    //     },
    //   });
    // }
  };
};

export const getApplyedUserAction = (job_id,limit,page) => {
  return async (dispatch) => {
    dispatch({ type: jobApplyConstants.GET_APPLYED_USERS_REQUEST });

    const res = await getApplyedUserAPI(job_id,limit,page);
    console.log(res.data)
    if (res.status === 200 && res.data.success == true) {
      const { rows,count } = res.data;
      dispatch({
        type: jobApplyConstants.GET_APPLYED_USERS_SUCCESS,

        payload: {
          rows,count
        },
      });
    }

  }
}