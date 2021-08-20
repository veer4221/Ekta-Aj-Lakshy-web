import axios from "../helper/axios";

export const getPostByIdAPI = (id) => axios.get(`/v1/post/getPost?id=${id}`);
export const getAllPostAPI = (page, limit, keyword) =>
  axios.get(
    `v1/post/getAllPost?page=${page}&limit=${limit}&keyword=${keyword}`
  );

export const emailCheckerAPI =(email)=>axios.post(`/v1/user/emailcheck`,email)
export const updateUserAPI =(user)=> axios.post('/v1/user/updateUser',user)