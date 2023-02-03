import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from "./userType"

const initialState = {
    loding: false,
    userData: [],
    error: ""
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST: return {
            ...state,
            loding: true
        }
        case FETCH_USER_SUCCESS: return {
            loding: false,
            userData: action.payload,
            error: ""
        }
        case FETCH_USER_ERROR: return {
            loding: false,
            userData: [],
            error: action.payload.message
        }
        default:
            return state
    }
}


export default userReducer;