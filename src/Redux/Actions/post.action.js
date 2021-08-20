import { authConstants, postContants } from "../constants";
import axios from "../../helper/axios";
import {
  createPostAPI,
  getAllPostAPI,
  getPostByIdAPI,
  removePostAPI,
} from "../../api/index";

export const resetPostStateAction = () => {
  return async (dispatch) => {
    dispatch({ type: postContants.RESET_STATE });
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
