/** @format */

const initState = {
  user: {},
  isLogin: false,
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        user: action.data,
        isLogin: true,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        user: {},
        isLogin: false,
      };
    }

    default:
      return { ...state };
  }
};
