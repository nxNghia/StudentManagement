const initState = {
    adminAccounts: [],
    students: []
};

export const commonReducer = (state = initState, action) => {
    switch (action.type)
    {
        case 'GET_ALL_FACULTIES':
            return {
                ...state,
                faculties: action.data
            };

        case 'GET_ALL_ADMIN':
            return {
                ...state,
                adminAccounts: action.data
            }

        case 'GET_ALL_STUDENTS':
            return {
                ...state,
                students: action.data
            }

        default: return {...state};
    }
}
