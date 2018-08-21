import { FETCH_CLASSROOMS } from '../actions/types';

export default function (state = null, actions) {
    switch (actions.type) {
        case FETCH_CLASSROOMS:
            return actions.payload;
        default:
            return state;
    }
};
