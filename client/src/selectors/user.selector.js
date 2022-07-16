import { createSelector } from "reselect";

const getUser = state => state.user;
const getLoginState = state => state.isLogin;

export const userSelector = createSelector(
    getUser,
    user => user
)

export const loginStateSelector = createSelector(
    getLoginState,
    result => result
)
