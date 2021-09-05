import { combineReducers } from "redux";

import postReducer from "./post.reducer";
import userReducer from "./user.reducer";
import achiveReducer from "./achievemnts.reducer";

const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
  achive: achiveReducer,
});

export default rootReducer;
