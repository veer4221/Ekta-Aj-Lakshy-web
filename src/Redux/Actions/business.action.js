import { businessConstruct } from "../constants";
import { getAllBusinessAPI, getBusinessAPI } from "./../../api/index";
import axios from "../../helper/axios";

export const getAllBusinessAction = (page, limit) => {
  return async (dispatch) => {
    dispatch({ type: businessConstruct.GET_ALL_BUSINESS_REQUEST });
    const res = await getAllBusinessAPI(page, limit);
    console.log("res:::", res);
    if (res.status === 200) {
      const { count, rows } = res.data;
      dispatch({
        type: businessConstruct.GET_ALL_BUSINESS_SUCCESS,

        payload: {
          count,
          rows,
        },
      });
    }
  };
};

export const getBusinessAction = (id) => {
  return async (dispatch) => {
    dispatch({ type: businessConstruct.GET_BUSINESS_REQUEST });
    const res = await getBusinessAPI(id);
    console.log(res);
    if (res.status === 200 && res.data.success == true) {
      const { Business } = res.data;
      dispatch({
        type: businessConstruct.GET_BUSINESS_SUCCESS,

        payload: {
          Business,
        },
      });
    }
  };
};
