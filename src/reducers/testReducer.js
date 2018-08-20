import { TEST } from '../actions/types';

export default function (state = {}, actions) {
    switch (actions.type) {
        case TEST:
            return actions.payload;
        default:
            return state;
    }
}
