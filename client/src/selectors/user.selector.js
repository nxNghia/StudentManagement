/** @format */

import { createSelector } from "reselect";

const getUser = state => state.userReducer.user;
const getLoginState = state => state.userReducer.isLogin;

export const userSelector = createSelector(
  getUser,
  (user) => user
);

export const loginStateSelector = createSelector(
  getLoginState,
  (result) => result
);
