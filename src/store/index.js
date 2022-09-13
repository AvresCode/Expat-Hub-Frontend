import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import eventReducer from "./event/slice";
import categoryReducer from "./category/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    event: eventReducer,
    category: categoryReducer,
  },
});
