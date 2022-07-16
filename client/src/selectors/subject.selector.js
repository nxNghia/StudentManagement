import { createSelector } from "reselect";

const getAllSubjects = state => state.subjectReducer.subjects;

export const allSubjectsSelector = createSelector(
    getAllSubjects,
    subjects => subjects
);
