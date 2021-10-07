import { combineReducers } from "redux";

import achiveReducer from "./achievemnts.reducer";
import authReducer from "./auth.reducer.js";
import jobApplyReducer from "./job.apply.reducer";
import jobReducer from "./job.reducer";
import placeReducer from "./place.reducer";
import postReducer from "./post.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
  achive: achiveReducer,
  auth: authReducer,
  place: placeReducer,
  job: jobReducer,
  job_apply: jobApplyReducer,
});

export default rootReducer;
