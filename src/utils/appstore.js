import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import movieSliceReducer from "./movieSlice";

export const appstore = configureStore({
  reducer: {
    user: userSliceReducer,
    movies : movieSliceReducer,

  },
});
