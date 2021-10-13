import { authConstants } from "../constants";
import axios from "../../helper/axios";
import { rojgharLoginAPI } from "../../api/index";

export const login = (user) => {
  console.log(user);

  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });
    const res = await rojgharLoginAPI(user);
    console.log(res);
    if (res.status === 200) {
      const { token, profile } = res.data.data;
     await  localStorage.setItem("token", token);
     await  localStorage.setItem("user", JSON.stringify(profile));
     
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          profile,
        },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: res.data.data.error },
        });
      }
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: "Failed to login" },
      });
    }
  };
};

export const signout = () => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGOUT_REQUEST });

    localStorage.clear();
    window.location.href = '/#/auth/login'

    dispatch({ type: authConstants.LOGOUT_SUCCESS });
    // window.location.href="/#/auth/login"

  };
};
