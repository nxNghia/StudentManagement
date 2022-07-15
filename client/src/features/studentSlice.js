/** @format */

import { createSlice } from "@reduxjs/toolkit";
export const studentSlice = createSlice({
  name: "student",
  initialState: {
    selectStudent: null,
  },
  reducers: {
    setStudent: (state, action) => {
      state.selectStudent = action.payload;
    },
  },
});

export const { setStudent } = studentSlice.actions;
export default studentSlice.reducer;
