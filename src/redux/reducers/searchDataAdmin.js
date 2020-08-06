import {
    GET_FILTER_ADMIN
} from "../actions";

const initialState = {
    user: null,
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_FILTER_ADMIN:
            return {
                ...state, user: actions.payload
            };
        default:
            return state;
    }
};