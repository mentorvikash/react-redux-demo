import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducers";
import iceCreamReducers from "./iceCream/iceCreamReducers";
import userReducer from "./users/ userReducers";

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducers,
    user: userReducer
})

export default rootReducer