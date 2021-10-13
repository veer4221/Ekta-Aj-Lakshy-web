import { api } from "./urlConfig";
import axios from "axios";
// import { Navigate,useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

const token = window.localStorage.getItem("token");
console.log("token",token);
const axiosIntance = axios.create({
  baseURL: api,
  headers: {
    Authorization: token ? `${token}` : "",
  },
});

axiosIntance.interceptors.request.use((req) => {
  const getToken = localStorage.getItem("token");
  if (getToken) {
    req.headers.Authorization = `${getToken}`;
  }
  return req;
});

axiosIntance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {

    
    console.log(typeof error.response.status,"status");
  if(error.response.status==401){
    // alert("ok")
    localStorage.clear();
    window.location.href = '/#/auth/login'
    // return <Navigate to="auth/login"/>
    // navigate('/auth/login');

  }
    const status = error.response ? error.response.status : 500;
    if (status && status === 500) {
      localStorage.clear();
    }
    return Promise.reject(error);
  }
);

export default axiosIntance;
