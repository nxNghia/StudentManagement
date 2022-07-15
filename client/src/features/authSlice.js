/** @format */

import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state, action) => {
      state.user = null;
    },
  },
});

export const selectCurrentUser = (state) => state.auth.user;
export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
