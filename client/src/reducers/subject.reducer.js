const initState = {
    subjects: []
};

export const subjectReducer = (state = initState, action) => {
    switch (action.type)
    {
        case 'ADD_SUBJECT':
            return {
                ...state
            }

        case 'GET_ALL_SUBJECTS':
            return {
                ...state,
                subjects: [...action.data]
            };

        default: return {...state};
    }
}
