import axios from "../helper/axios";

export const getPostByIdAPI = (id) => axios.get(`/v1/post/getPost?id=${id}`);
export const getAllPostAPI = (page, limit, keyword) =>
  axios.get(
    `v1/post/getAllPost?page=${page}&limit=${limit}&keyword=${keyword}`
  );

export const emailCheckerAPI = (email) =>
  axios.post(`/v1/user/emailcheck`, email);
export const updateUserAPI = (user) => axios.post("/v1/user/updateUser", user);
export const userIsPresentOrNotAPI = (email) =>
  axios.post(`/v1/user/checkUser`, email);
export const addUserAPI = (user) => axios.post(`/v1/user/signup`, user);

export const getAchiveAPI = () => axios.get(`/v1/Achievemnts/getAchive`);

export const rojgharLoginAPI = (payload) =>
  axios.post(`/v1/auth/login`, payload);

export const userProfileAPI = (id) =>
  axios.apply(`/v1/user/userProfile?id=${id}`);

export const getStateAPI = () => axios.get(`/v1/job/getState`);
export const getDistrictAPI = (state_id) =>
  axios.get(`/v1/job/getDistrict?state_id=${state_id}`);
export const getCityAPI = (districtid) =>
  axios.get(`/v1/job/getCity?districtid=${districtid}`);

export const addJobAPI = (record) => axios.post(`/v1/job/addjob`, record);

export const getAllJobsAPI = (state, district, city, page, limit) =>
  axios.get(
    `/v1/job/getAllJobs?city=${city == 0 ? `` : city}&state=${
      state == 0 ? `` : state
    }&district=${district == 0 ? `` : district}&page=${page}&limit=${limit}`
  );

export const getJobAPI = (id) => axios.get(`/v1/job/getjob?id=${id}`);

export const applyForJobAPI = (obj) => axios.post(`/v1/jobApply/apply`, obj);
