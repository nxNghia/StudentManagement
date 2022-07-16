import { API } from "../app/API";

export const login = (data) => {
    return {
        type: 'LOGIN',
        data
    }
}
