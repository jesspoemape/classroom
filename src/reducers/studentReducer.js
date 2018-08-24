import { FETCH_STUDENT } from '../actions/types';

export default function (state = null, actions) {
    switch (actions.type) {
        case FETCH_STUDENT:
            return actions.payload;
        default:
            return state;
    }
};
