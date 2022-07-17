import { API } from "../app/API";

export const login = (data) => {
    console.log(data);
    return {
        type: 'LOGIN',
        data
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

export const registedClasses = (id) => {
    return dispatch => {
        API.get(`/student/getClasses/${id}`, {withCredentials: true})
        .then (response => {
            dispatch({
                type: 'GET_REGISTER',
                data: response.data
            });
        });
    }
}
