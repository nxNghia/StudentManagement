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
        API.get(`/student/getClasses/${id}`, {withCredentials: true})
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
        API.post("/student/update", data)
        .then(() => {
          API.get(`/student/get/${data.id}`)
            .then((res) => {
              dispatch({
                type: 'UPDATE',
                data: res.data[0]
              })
            })
        })
    }
}
