import { createSelector } from "reselect";

const getFaculties = state => state.commonReducer.faculties;
const getAdmin = state => state.commonReducer.adminAccounts;
const getStudents = state => state.commonReducer.students;

export const allFacultiesSelector = createSelector(
    getFaculties,
    faculties => faculties
);

export const allAdminsSelector = createSelector(
    getAdmin,
    admin => admin
);

export const allStudentsSelector = createSelector(
    getStudents,
    students => students
)
