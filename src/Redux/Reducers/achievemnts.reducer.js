import { achievemntsConstant } from "../constants";

const initState = {
  error: null,
  message: "",
  loading: false,
  achieve: {
    count: null,
    rows: [],
  },
};

export default (state = initState, action) => {
  switch (action.type) {
    case achievemntsConstant.GET_ACHIVE_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case achievemntsConstant.GET_ACHIVE_SUCCESS:
      console.log(action);
      state = {
        ...state,
        loading: false,
        achieve: {
          count: action.payload.count,
          rows: action.payload.rows,
        },
      };
      break;
    case achievemntsConstant.GET_ACHIVE_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
        message: null,
      };
      break;
  }

  return state;
};
