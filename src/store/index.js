import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import eventReducer from "./event/slice";
import commentReducer from "./comment/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    event: eventReducer,
    comment: commentReducer,
  },
});
