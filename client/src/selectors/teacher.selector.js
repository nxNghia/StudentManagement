/** @format */

import { createSelector } from "reselect";

const getAllTeachers = (state) =>
  state.teacherReducer.teachers;

export const allTeacherSelector = createSelector(
  getAllTeachers,
  (teachers) => teachers
);
