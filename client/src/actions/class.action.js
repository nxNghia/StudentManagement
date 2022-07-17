import { API } from "../app/API"

export const getAllClasses = () => {
    return dispatch => {
        API.get('/class/get/id/desc')
        .then(response => {
            dispatch({
                type: 'GET_ALL_CLASSES',
                data: response.data
            });
        });
    };
};

export const addClass = (data) => {
    console.log(data);
    return dispatch => {
        API.post('/class/add', data)
        .then(() => {
            dispatch({type: 'ADD_CLASS'});
            dispatch(getAllClasses());
        });
    }
}
