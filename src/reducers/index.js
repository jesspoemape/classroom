import { combineReducers } from 'redux';
import studentReducer from './studentReducer';
import classroomReducer from './classroomReducer';
import deckReducer from './deckReducer';

export default combineReducers({
    classrooms: classroomReducer,
    students: studentReducer,
    decks: deckReducer,
});