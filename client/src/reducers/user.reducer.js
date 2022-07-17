/** @format */

const initState = {
  user: {},
  isLogin: false,
  registedClasses: []
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN": {
      console.log(action.data);
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
    case 'UPDATE': {
      return {
        ...state,
        user: action.data,
        isLogin: true,
      }
    }

    case "GET_REGISTER": {
      return {
        ...state,
        registedClasses: action.data
      }
    }

    default:
      return { ...state };
  }
};
