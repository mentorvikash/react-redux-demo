import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from "./userType";
import axios from "axios";

export const fectUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fectUserSuccess = (userData) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: userData
    }
}

export const fectUserError = (error) => {
    return {
        type: FETCH_USER_ERROR,
        payload: error
    }
}

export const fetchUser = () => {
 return (dispatch) => {
    dispatch(fectUserRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        const user = response.data
        dispatch(fectUserSuccess(user))

    })
    .catch((error)=>{
        const error1 = error.message
        dispatch(fectUserError(error1))
    })
 }
}