import { jobApplyConstants } from "../constants";
import { applyForJobAPI } from "../../api/index";

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
