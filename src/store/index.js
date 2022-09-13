import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import authReducer from "./auth/slice";
import eventReducer from "./event/slice";
import commentReducer from "./comment/slice";
import userReducer from "./user/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    auth: authReducer,
    event: eventReducer,
    comment: commentReducer,
    user: userReducer,
  },
});
