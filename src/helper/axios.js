import axios from "axios";
import { api } from "./urlConfig";

const axiosIntance = axios.create({
  baseURL: api,
});

axiosIntance.interceptors.request.use((req) => {
  return req;
});

axiosIntance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log(error.response);
    const status = error.response ? error.response.status : 500;
    if (status && status === 500) {
      localStorage.clear();
    }
    return Promise.reject(error);
  }
);

export default axiosIntance;
