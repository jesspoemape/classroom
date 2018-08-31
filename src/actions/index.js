const uuid = require('uuid/v4');
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

export const fetchStudent = (classroomId, studentId) => (dispatch) => {
    if (!testing) {
        fetch('https://classroom-tracker.firebaseio.com/students.json')
    } else {
        dispatch({ type: FETCH_STUDENT, payload: studentList[0] });
    }
};

export const addClassroom = (classroomInfo) => (dispatch) => {
    if (!testing) {
        const classroomData = {
            id: uuid(),
            teacher: classroomInfo.teacher,
            label: classroomInfo.label,
        }
        fetch ('https://classroom-tracker.firebaseio.com/classrooms.json', {
            method: 'POST',
            body: JSON.stringify(classroomData),
        })
        .catch(err => console.log('Error adding a classroom: ', err))
        .then(res => res.json) 
        .then(parsedRes => {
            console.log('RES:: ', parsedRes);
        });
    } else {
        dispatch({ type: ADD_CLASSROOM, payload: {} });
    }
};

export const addStudent = (studentInfo) => (dispatch) => {
    if (!testing) {
        const studentData = {
            id: uuid(),
            classroomId: studentInfo.classroomId,
            firstName: studentInfo.firstName,
            lastName: studentInfo.lastName,
            label: studentInfo.label,
            studiedDecks: [],
        }
        fetch ('https://classroom-tracker.firebaseio.com/students.json', {
            method: 'POST',
            body: JSON.stringify(studentData),
        })
        .catch(err => console.log('Error adding student: ', err))
        .then(res => res.json)
        .then(parsedRes => {
            console.log('RES:: ', parsedRes);
        });
    
    } else {
        dispatch({ type: ADD_STUDENT, payload: {} });
    }
};
