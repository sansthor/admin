import {
    combineReducers
} from "redux";

import LoginAdmin from "./LoginAdmin";
import service from "./service";
import userData from './userData'

export default combineReducers({
    LoginAdmin,
    service,
    userData
});