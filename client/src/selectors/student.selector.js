import { createSelector } from "reselect";

const getStudents = state => state.studentReducer.students;

export const allStudentsSelector = createSelector(
    getStudents,
    students => students
);
