const initState = {
    user: {},
    isLogin: false
};

export const userReducer = (state = initState, action) => {
    switch (action.type)
    {
        case 'LOGIN':
            {
                return {
                    ...state,
                    user: action.data,
                    isLogin: true
                }
            }

            default: return {...state};
    }
}
