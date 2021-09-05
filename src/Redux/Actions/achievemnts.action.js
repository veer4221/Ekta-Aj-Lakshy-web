import { achievemntsConstant } from "../constants";
import axios from "../../helper/axios";
import { getAchiveAPI } from "../../api/index";

export const getAchiveAction = () => {
  return async (dispatch) => {
    dispatch({ type: achievemntsConstant.GET_ACHIVE_REQUEST });

    const res = await getAchiveAPI();
    const { success } = res.data;

    if (res.status === 200 && success == true) {
      const { count, rows, success } = res.data;
      dispatch({
        type: achievemntsConstant.GET_ACHIVE_SUCCESS,
        payload: { count, rows, success },
      });
    }
    if (res.status === 200 && success == false) {
      const { error } = res.data;

      dispatch({
        type: achievemntsConstant.GET_ACHIVE_FAILURE,
        payload: { error },
      });
    }
  };
};
