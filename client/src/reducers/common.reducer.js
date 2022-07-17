const initState = {
    adminAccounts: []
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

        default: return {...state};
    }
}
