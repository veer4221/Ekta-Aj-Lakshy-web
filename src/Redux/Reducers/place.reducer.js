/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */

import { placeConstants } from "../constants";

const initState = {
  error: null,
  city: {},
  state: {},
  district: {},
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case placeConstants.GET_STATE_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case placeConstants.GET_STATE_SUCCESS:
      console.log(action);
      state = {
        ...state,
        loading: false,
        state: {
          count: action.payload.count,
          rows: action.payload.rows,
        },
      };
      break;
    case placeConstants.GET_CITY_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case placeConstants.GET_CITY_SUCCESS:
      console.log(action);
      state = {
        ...state,
        loading: false,
        city: {
          count: action.payload.count,
          rows: action.payload.rows,
        },
      };
      break;
    case placeConstants.GET_DIST_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case placeConstants.GET_DIST_SUCCESS:
      console.log(action);
      state = {
        ...state,
        loading: false,
        district: {
          count: action.payload.count,
          rows: action.payload.rows,
        },
      };
      break;
    case placeConstants.CLEAN_CITY:
      state = {
        ...state,
        city: {},
      };

      break;
    case placeConstants.CLEAN_DISTRICT:
      state = {
        ...state,
        district: {},
      };

      break;

    case placeConstants.CLEAN_ALL_STATE:
      state = {
        error: null,
        city: {},
        state: {},
        district: {},
        loading: false,
      };

      break;
  }

  return state;
};
