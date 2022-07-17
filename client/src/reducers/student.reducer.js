const initState = {
    students: []
};

export const studentReducer = (state = initState, action) => {
    switch (action.type)
    {
        case 'ADD_STUDENT':
            return {
                ...state
            };

        case 'GET_ALL_STUDENTS':
            return {
                ...state,
                students: [...action.data]
            };

        case 'REMOVE_STUDENT':
            return {
                ...state
            };

        default: return {...state};
    }
}
