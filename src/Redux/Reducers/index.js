import { combineReducers } from "redux";

import achiveReducer from "./achievemnts.reducer";
import authReducer from "./auth.reducer.js";
import postReducer from "./post.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
  achive: achiveReducer,
  auth: authReducer,
});

export default rootReducer;
