import { FETCH_DECKS } from '../actions/types';

export default function (state = null, actions) {
    switch (actions.type) {
        case FETCH_DECKS:
            return actions.payload;
        default:
            return state;
    }
};
