import { combineReducers } from 'redux';
import studentsListReducer from './studentsListReducer';
import classroomsListReducer from './classroomsListReducer';
import decksListReducer from './decksListReducer';
import studentReducer from './studentReducer';

export default combineReducers({
    classroomsList: classroomsListReducer,
    studentsList: studentsListReducer,
    decksList: decksListReducer,
    student: studentReducer,
});