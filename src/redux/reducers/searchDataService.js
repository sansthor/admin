import {
    GET_FILTER_SERVICE
} from "../actions";

const initialState = {
    user: null,
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_FILTER_SERVICE:
            return {
                ...state, user: actions.payload
            };
        default:
            return state;
    }
};