import { userContants, authConstants, postContants } from "../constants";
import axios from "../../helper/axios";
import { emailCheckerAPI, updateUserAPI } from "../../api/index";

export const emailCheckAction = (email) => {
  return async (dispatch) => {
    dispatch({ type: userContants.EMAIL_CHECKER_REQUEST });
    const res = await emailCheckerAPI(email);
    const { success } = res.data;
    console.log(res.status);
    if (res.status === 200) {
      dispatch({
        type: userContants.EMAIL_CHECKER_SUCCESS,
        payload: { adminUser: res.data.adminUser, success: res.data.success },
      });
    }
  };
};

export const stateUpdateAction = (obj) => {
  return async (dispatch) => {
    dispatch({ type: userContants.UPDATE_STATE_REQUEST });
    dispatch({ type: userContants.UPDATE_STATE_SUCCESS, payload: obj });
  };
};

export const updateUserAction = (user) => {
  return async (dispatch) => {
    dispatch({ type: userContants.USER_UPDATE_REQUEST });
    const res = await updateUserAPI(user);
    if (res.status === 200) {
      dispatch({
        type: userContants.USER_UPDATE_SUCCESS,
        payload: { adminUser: "updated", success: res.data.success },
      });
    }
  };
};
