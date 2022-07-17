import axios from "axios";
import { API } from "../app/API"
import { registedClasses } from "./user.actions";

export const getAllStudents = (filter) => {
    return dispatch => {
        axios.get(`/student/get/${filter.type}/${filter.order}`)
        .then (response => {
            dispatch({
                type: 'GET_ALL_STUDENTS',
                data: response.data
            });
        });
    }
}

export const addStudent = (data) => {
    return dispatch => {
        axios.post('/student/add', data)
        .then(() => {
            dispatch({type: 'ADD_STUDENT'});
            dispatch(getAllStudents({type: 'id', order: 'asc'}));
        });
    }
}

export const removeStudent = (id) => {
    return dispatch => {
        axios.post('/student/remove', id)
        .then(response => {
            dispatch({type: 'REMOVE_STUDENT'});
            dispatch(getAllStudents({type: 'id', order: 'asc'}));
        })
    }
}

export const evaluatedStudent = (data) => {
    return dispatch => {
        axios.post('/student/updateMark', data)
        .then (() => {
            dispatch({type: 'EVALUATED_STUDENT'});
            dispatch(registedClasses(data.student_id));
        })
    }
}
