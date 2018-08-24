import { FETCH_STUDENTS_LIST } from '../actions/types';

export default function (state = null, actions) {
    switch (actions.type) {
        case FETCH_STUDENTS_LIST:
            return actions.payload;
        default:
            return state;
    }
};
