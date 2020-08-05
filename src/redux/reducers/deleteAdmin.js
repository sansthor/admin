import {
    DELETE_USER
} from "../actions";

const initialState = {
    user: null,
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case DELETE_USER:
            return {
                ...state, user: actions.payload
            };
        default:
            return state;
    }
};