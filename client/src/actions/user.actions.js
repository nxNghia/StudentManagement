import axios from "axios";
import { API } from "../app/API";

export const login = (data) => {
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
        axios.get(`/student/getClasses/${id}`, {withCredentials: true})
        .then (response => {
            dispatch({
                type: 'GET_REGISTER',
                data: response.data
            });
        });
    }
}

export const update = (data) => {
    return dispatch => {
        axios.post("/student/update", data)
        .then(() => {
            axios.get(`/student/get/${data.id}`)
            .then((res) => {
              dispatch({
                type: 'UPDATE',
                data: res.data[0]
              })
            })
        })
    }
}
