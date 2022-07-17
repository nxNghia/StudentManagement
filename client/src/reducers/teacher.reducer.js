/** @format */

const initState = {
  teachers: [],
};

export const teacherReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ALL": {
      return {
        ...state,
        teachers: action.data
      };
    }

    default:
      return { ...state };
  }
};
