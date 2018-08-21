import { FETCH_STUDENTS } from '../actions/types';

export default function (state = null, actions) {
    switch (actions.type) {
        case FETCH_STUDENTS:
            return actions.payload;
        default:
            return state;
    }
};
