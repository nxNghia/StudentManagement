/** @format */

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import studentReducer from "../features/studentSlice";
export default configureStore({
  reducer: {
    user: authReducer,
    student: studentReducer,
  },
});
