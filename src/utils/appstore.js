import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import movieSliceReducer from "./movieSlice";
import gptSliceReducer from "./gptSlice";

export const appstore = configureStore({
  reducer: {
    user: userSliceReducer,
    movies : movieSliceReducer,
    gpt : gptSliceReducer,

  },
});
