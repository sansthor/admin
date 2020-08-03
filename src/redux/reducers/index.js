import { combineReducers } from "redux";

import LoginAdmin from "./LoginAdmin";
import service from "./service";

export default combineReducers({
    LoginAdmin,
    service,
});
