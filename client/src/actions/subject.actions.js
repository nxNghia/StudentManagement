import axios from "axios";
import { API } from "../app/API"

export const addSubject = (data) => {
    return dispatch => {
        axios.post('/subject/add', data)
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
        axios.get('/subject/get/id/desc')
        .then(response => {
            dispatch({
                type: 'GET_ALL_SUBJECTS',
                data: response.data
            });
        });
    };
};
