import axios from "axios";
import { API } from "../app/API"

export const getAllClasses = () => {
    return dispatch => {
        axios.get('/class/get/id/desc')
        .then(response => {
            dispatch({
                type: 'GET_ALL_CLASSES',
                data: response.data
            });
        });
    };
};

export const addClass = (data) => {
    return dispatch => {
        axios.post('/class/add', data)
        .then(() => {
            dispatch({type: 'ADD_CLASS'});
            dispatch(getAllClasses());
        });
    }
}

export const getAllAvailableClasses = (id) => {
    return dispatch => {
        axios.get(`/student/getClassesAvailable/${id}`)
        .then(response => {
            dispatch({
                type: 'GET_ALL_CLASSES',
                data: response.data
            })
        })
    }
}
