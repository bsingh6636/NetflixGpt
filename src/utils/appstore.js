import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";

export const appstore = configureStore({
  reducer: {
    user: userSliceReducer,
  },
});
