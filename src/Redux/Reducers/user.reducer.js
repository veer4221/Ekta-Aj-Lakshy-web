import { userContants } from "../constants";

const initState = {
  error: null,
  message: "",
  getUserInfo: {},
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case userContants.EMAIL_CHECKER_REQUEST:
      state = {
        ...state,
        loading: true,
        getUserInfo: {},
      };
      break;
    case userContants.EMAIL_CHECKER_SUCCESS:
      console.log(action);
      state = {
        ...state,
        loading: false,
        getUserInfo: action.payload.adminUser,
      };
      break;

    case userContants.UPDATE_STATE_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userContants.UPDATE_STATE_SUCCESS:
      console.log(action);
      state = {
        ...state,
        loading: false,
        getUserInfo: { ...state.getUserInfo, ...action.payload },
      };
      break;
    case userContants.USER_UPDATE_REQUEST:
      console.log(action);
      state = {
        ...state,
        loading: true,
      };
      break;
    case userContants.USER_UPDATE_SUCCESS:
      console.log(action);
      state = {
        ...state,
        loading: false,
        message: action.payload.adminUser,
      };
      break;
  }

  return state;
};
