import { FETCH_CLASSROOMS_LIST, FETCH_DECKS_LIST, FETCH_STUDENTS_LIST, FETCH_STUDENT } from './types';
import studentList from './../mocks/studentList';
import classroomList from './../mocks/classroomList';
import deckList from './../mocks/deckList';
const testing = true;

export const fetchClassroomsList = () => async (dispatch) => {
    if (!testing) {
        try {
        } catch (err) {
        }
    } else {
        dispatch({ type: FETCH_CLASSROOMS_LIST, payload: classroomList });
    }
};

export const fetchStudentsList = (classroomId) => async (dispatch) => {
    if (!testing) {
        try {
        } catch (err) {
        }
    } else {
        dispatch({ type: FETCH_STUDENTS_LIST, payload: studentList });
    }
};

export const fetchDecksList = (classroomId) => async (dispatch) => {
    if (!testing) {
        try {
        } catch (err) {
        }
    } else {
        dispatch({ type: FETCH_DECKS_LIST, payload: deckList });
    }
};

export const fetchStudent = (classroomId, studentId) => async (dispatch) => {
    if (!testing) {
        try {
        } catch (err) {
        }
    } else {
        dispatch({ type: FETCH_STUDENT, payload: studentList[0] });
    }
};
