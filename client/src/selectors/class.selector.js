import { createSelector } from "reselect";

const getAllClasses = state => state.classReducer.classes;

export const allClassesSelector = createSelector(
    getAllClasses,
    classes => classes
);
