import { API } from "../app/API"

export const addSubject = (data) => {
    return dispatch => {
        API.post('/subject/add', data)
        .then(response => {
            dispatch({
                type: 'ADD_SUBJECT',
                data: response.data
            });
        });
    };
};

export const getAllSubjects = () => {
    return dispatch => {
        API.get('/subject/get/id/desc')
        .then(response => {
            console.log(response.data);
            dispatch({
                type: 'GET_ALL_SUBJECTS',
                data: response.data
            });
        });
    };
};
