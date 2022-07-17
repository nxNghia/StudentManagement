import { API } from "../app/API"

export const getAllFaculties = () => {
    return dispatch => {
        API.get('/common/getAllFaculties')
        .then(response => {
            dispatch({
                type: 'GET_ALL_FACULTIES',
                data: response.data
            });
        });
    };
};

export const getAllAdmin = () => {
    return dispatch => {
        API.get('/admin/get/id/desc')
        .then(response => {
            dispatch({
                type: 'GET_ALL_ADMIN',
                data: response.data
            });
        });
    };
};
