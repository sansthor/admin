import {
    combineReducers
} from "redux";

import LoginAdmin from "./LoginAdmin";
import service from "./service";
import userData from './userData';
import transactionData from './transaction';
import adminData from './admin';
import addAdmin from './addAdmin';
import editAdmin from './editAdmin';
import deleteAdmin from './deleteAdmin'
import searchDataAdmin from './searchDataAdmin'
import searchDataUser from './searchDataUser'
import searchDataTransaction from './searchDataTransaction'
import searchDataService from './searchDataService'

export default combineReducers({
    LoginAdmin,
    service,
    userData,
    transactionData,
    adminData,
    addAdmin,
    editAdmin,
    deleteAdmin,
    searchDataAdmin,
    searchDataUser,
    searchDataTransaction,
    searchDataService
});