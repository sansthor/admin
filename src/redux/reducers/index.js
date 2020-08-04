import {
    combineReducers
} from "redux";

import LoginAdmin from "./LoginAdmin";
import service from "./service";
import userData from './userData';
import transactionData from './transaction';
import adminData from './admin'

export default combineReducers({
    LoginAdmin,
    service,
    userData,
    transactionData,
    adminData
});