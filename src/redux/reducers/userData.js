import {
    GET_ALL_USER
} from "../actions";

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_ALL_USER:
            return actions.payload;

        default:
            return state;
    }
};