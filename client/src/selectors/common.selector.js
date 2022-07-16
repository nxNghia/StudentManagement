import { createSelector } from "reselect";

const getFaculties = state => state.commonReducer.faculties;

export const allFacultiesSelector = createSelector(
    getFaculties,
    faculties => faculties
);
