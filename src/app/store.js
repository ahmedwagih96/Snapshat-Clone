import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import cameraReducer from "../features/cameraSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    camera: cameraReducer,
  },
});
