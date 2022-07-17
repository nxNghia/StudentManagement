import axios from "axios";
import { API } from "../app/API"

export const getAllFaculties = () => {
    return dispatch => {
        axios.get('/common/getAllFaculties')
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
        axios.get('/admin/get/id/desc')
        .then(response => {
            dispatch({
                type: 'GET_ALL_ADMIN',
                data: response.data
            });
        });
    };
};
