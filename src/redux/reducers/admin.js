import {
    GET_ALL_ADMIN
} from "../actions";

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_ALL_ADMIN:
            return actions.payload;

        default:
            return state;
    }
};