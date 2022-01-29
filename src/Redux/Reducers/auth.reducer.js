import { authConstants } from "../constants";

const initState = {
  token: null,
  adminToken: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
  },
  adminUser: {
    firstName: "",
    lastName: "",
    email: "",
  },
  adminAuthenticate: false,
  adminAuthenticating: false,
  adminMessage:"",
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
  // console.worn(action)

  // eslint-disable-next-line default-case
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;
      case authConstants.ADMIN_LOGIN_REQUEST:
        state = {
          ...state,
          AdminAuthenticating: true,
        };
        break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.profile,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      };
      break;
      case authConstants.ADMIN_LOGIN_SUCCESS:
        state = {
          ...state,
          adminUser: action.payload.profile,
          adminToken: action.payload.token,
          adminAuthenticate: true,
          adminAuthenticating: false,
        };
        break;
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authConstants.LOGOUT_SUCCESS:
      state = {
        ...initState,
        loading: false,
      };
      break;
    case authConstants.LOGOUT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
  }

  return state;
};
