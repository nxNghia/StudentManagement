import { API } from "../app/API"

export const getAllTeachers = () => {
    return dispatch => {
        API.get('/admin/get/id/asc')
        .then(response => {
            dispatch({
                type: 'GET_ALL',
                data: response.data
            });
        });
    };
};
