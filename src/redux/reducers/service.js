import {
    GET_ALL_SERVICE,
    GET_FILTER_SERVICE
} from "../actions";

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_ALL_SERVICE:
            return actions.payload;
        case GET_FILTER_SERVICE:
            return actions.payload;
        default:
            return state;
    }
};