const initState = {};

export const commonReducer = (state = initState, action) => {
    switch (action.type)
    {
        case 'GET_ALL_FACULTIES':
            return {
                ...state,
                faculties: action.data
            }

        default: return {...state};
    }
}
