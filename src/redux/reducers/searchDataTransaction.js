import {
    GET_FILTER_TRANSACTION
} from "../actions";

const initialState = {
    user: null,
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_FILTER_TRANSACTION:
            return {
                ...state, user: actions.payload
            };
        default:
            return state;
    }
};