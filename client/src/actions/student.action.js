import { API } from "../app/API"

export const getAllStudents = (filter) => {
    return dispatch => {
        API.get(`/student/get/${filter.type}/${filter.order}`)
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
        API.post('/student/add', data)
        .then(() => {
            dispatch({type: 'ADD_STUDENT'});
            dispatch(getAllStudents({type: 'id', order: 'asc'}));
        });
    }
}

export const removeStudent = (id) => {
    return dispatch => {
        API.post('/student/remove', id)
        .then(response => {
            dispatch({type: 'REMOVE_STUDENT'});
            dispatch(getAllStudents({type: 'id', order: 'asc'}));
        })
    }
}
