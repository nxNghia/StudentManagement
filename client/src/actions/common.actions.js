import { API } from "../app/API"

export const getAllFaculties = () => {
    return dispatch => {
        API.get('/common/getAllFaculties')
        .then(response => {
            dispatch({
                type: 'GET_ALL_FACULTIES',
                data: response.data
            });
        });
    };
};
