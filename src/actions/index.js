import { FETCH_CLASSROOMS, FETCH_DECKS, FETCH_STUDENTS } from './types';
import studentList from './../mocks/studentList';
import classroomList from './../mocks/classroomList';
import deckList from './../mocks/deckList';
const testing = true;

export const fetchClassrooms = () => async (dispatch) => {
    if (!testing) {
        try {
        } catch (err) {
        }
    } else {
        dispatch({ type: FETCH_CLASSROOMS, payload: classroomList });
    }
};

export const fetchStudents = (classroomId) => async (dispatch) => {
    if (!testing) {
        try {
        } catch (err) {
        }
    } else {
        dispatch({ type: FETCH_STUDENTS, payload: studentList });
    }
};

export const fetchDecks = (classroomId) => async (dispatch) => {
    if (!testing) {
        try {
        } catch (err) {
        }
    } else {
        dispatch({ type: FETCH_DECKS, payload: deckList });
    }
};
