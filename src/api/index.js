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
  axios.get(`/v1/user/getuserProfile?id=${id}`);

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

export const getMyJobAPI = () => axios.get(`/v1/job/getmyjob`);
export const getApplyedUserAPI = (job_id, limit, page) =>
  axios.get(
    `/v1/jobApply/applyedUser?job_id=${job_id}&limit=${limit}&page=${page}`
  );

export const checkUserStatusAPI = (body) =>
  axios.post(`/v1/user/checkUserStatus`, body);
export const updatePaymentStatusAPI = (body) =>
  axios.post(`/v1/user/updatePaymentStatus`, body);
export const getAllBusinessAPI = (page, limit) =>
  axios.get(`/v1/business/getallBusiness?page=${page}&limit=${limit}`);

export const addAchiveAPI = () => axios.get(`/v1/Achievemnts/setvisitor`);
export const getBusinessAPI = (id) =>
  axios.get(`/v1/business/getBusiness?id=${id}`);

export const getAllRandomeVideoAPI = (page, limit) =>
  axios.get(`/v1/ektaVideo/getAllVideoes?page=${page}&limit=${limit}`);

export const getAllEktaLatestVideoAPI = (page, limit) =>
  axios.get(`/v1/ektaVideo/getAllEktaLatestVideo?page=${page}&limit=${limit}`);

export const getAllEktaVideoByCategoryAPI = (page, limit, category) =>
  axios.get(
    `/v1/ektaVideo/getAllEktaVideoByCategory?page=${page}&limit=${limit}&category=${category}`
  );

export const getVideoByIdAPI = (id) =>
  axios.get(`/v1/ektaVideo/getVideoById?id=${id}`);

export const getallCoures = () => axios.get(`/v1/ektaVideo/getAllCourse`);
export const getallHistory = () => axios.get(`/v1/ektaVideo/getAllHistory`);

export const getCourseVideoesAPI = (id, page, limit) =>
  axios.get(
    `/v1/ektaVideo/getCourseVideo?page=${page}&limit=${limit}&id=${id}`
  );
export const getHistoryVideoesAPI = (id, page, limit) =>
  axios.get(
    `/v1/ektaVideo/getHistoryVideo?page=${page}&limit=${limit}&id=${id}`
  );
export const getCourseVideoByIdAPI = (id, course_id) =>
  axios.get(`/v1/ektaVideo/getCourseVideoById?id=${id}&course_id=${course_id}`);
export const getHistoryVideoByIdAPI = (id, course_id) =>
  axios.get(
    `/v1/ektaVideo/getHistoryVideoById?id=${id}&course_id=${course_id}`
  );
export const setAchieveAPI = (object) =>
  axios.post("/v1/Achievemnts/setAchive?id=1", object);
export const getAchieveAPI = () => axios.get("/v1/Achievemnts/getAchive");
export const getAllUserAPI = (page, limit, keyword) =>
  axios.get(
    `/v1/user/getAllUsers?page=${page}&limit=${limit}&keyword=${keyword}`
  );
export const removePostAPI = (id) =>
  axios.get(`/v1/post/removePost?status=0&id=${id}`);
export const createPostAPI = (post) => axios.post(`/v1/post/addPost`, post);
export const createVideoAPI = (video) =>
  axios.post(`/v1/ektaVideo/addektaVideo`, video);
export const removeVideoAPI = (id) =>
  axios.get(`/v1/ektaVideo/removeektaVideo?id=${id}&status=0`);
export const getAllCourseAPI = () => axios.get(`/v1/ektaVideo/getAllCourse`);
export const createHistoryAPI = (video) =>
  axios.post(`/v1/ektaVideo/createHistory`, video);
export const createCourseAPI = (video) =>
  axios.post(`/v1/ektaVideo/createCourse`, video);
  export const removeCourseAPI = (id) =>
  axios.get(`/v1/ektaVideo/removeCourseById?id=${id}&status=0`);
