import { jobApplyConstants } from "../constants";
import { applyForJobAPI,getApplyedUserAPI } from "../../api/index";
import { ConsoleView } from "react-device-detect";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
// import axios from "../../helper/axios";

export const jobApplyAction = (record) => {
  return async (dispatch) => {
    dispatch({ type: jobApplyConstants.JOB_APPLY_REQUEST });
    const res = await applyForJobAPI(record);
    console.log(res);
    if (res.status === 200) {
      Swal.fire(
        ' job Applyed',
        'You clicked the button!',
        'success'
      )
      dispatch({
        type: jobApplyConstants.JOB_APPLY_SUCCESS,
        payload: {
          message: "job created",
        },
      });
    }
    else {
      try{
        alert("ok1")
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: res.data.error,
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
      catch(e){
        alert("ok2")

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'something wrong',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    }
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