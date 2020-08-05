import {
    GET_ALL_TRANSACTION,GET_ALL_DONE
} from "../actions/transaction";

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_ALL_TRANSACTION:
            return actions.payload;
            case GET_ALL_DONE:
                return actions.payload
        default:
            return state;
    }
};