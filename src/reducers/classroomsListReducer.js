import { FETCH_CLASSROOMS_LIST } from '../actions/types';

export default function (state = null, actions) {
    switch (actions.type) {
        case FETCH_CLASSROOMS_LIST:
            return actions.payload;
        default:
            return state;
    }
};
