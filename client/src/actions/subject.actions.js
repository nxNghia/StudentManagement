import { API } from "../app/API"

export const addSubject = (data) => {
    return dispatch => {
        API.post('/subject/add', data)
        .then(() => {
            dispatch({
                type: 'ADD_SUBJECT'
            });
            dispatch(getAllSubjects());
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
