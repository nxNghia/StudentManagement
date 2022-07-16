const initState = {
    classes: []
};

export const classReducer = (state = initState, action) => {
    switch (action.type)
    {
        case 'GET_ALL_CLASSES':
            return {
                ...state,
                classes: action.data
            }

        default: return {...state};
    }
}
