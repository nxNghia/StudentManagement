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
