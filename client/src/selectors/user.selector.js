/** @format */

import { createSelector } from "reselect";

const getUser = state => state.userReducer.user;
const getLoginState = state => state.userReducer.isLogin;
const getRegistedClasses = state => {
  return state.userReducer.registedClasses;
};

export const userSelector = createSelector(
  getUser,
  (user) => user
);

export const loginStateSelector = createSelector(
  getLoginState,
  (result) => result
);

export const registedClassesSelector = createSelector(
  getRegistedClasses,
  classes => classes
)
