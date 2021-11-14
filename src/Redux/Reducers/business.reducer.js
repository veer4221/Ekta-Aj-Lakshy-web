/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */

import { businessConstruct } from "../constants";

const initState = {
  error: null,
  message: "",
  getBusiness: {},
  loading: false,
  getAllBusiness: {},
};

export default (state = initState, action) => {
  switch (action.type) {
    case businessConstruct.GET_ALL_BUSINESS_REQUEST:
      console.log(action);
      state = {
        ...state,
        loading: true,
      };
      break;
    case businessConstruct.GET_ALL_BUSINESS_SUCCESS:
      console.log(action);
      state = {
        ...state,
        loading: false,
        getAllBusiness: action.payload,
      };
      break;
    case businessConstruct.GET_BUSINESS_REQUEST:
      console.log(action);
      state = {
        ...state,
        loading: true,
      };
      break;
    case businessConstruct.GET_BUSINESS_SUCCESS:
      console.log(action);
      state = {
        ...state,
        loading: false,
        getBusiness: action.payload,
      };
      break;
  }

  return state;
};
