import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import * as actions from './../actions';

class PickClassroomAndStudentScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classroom: null,
            student: null,
            deck: null,
        };

        this.updatePicker = this.updatePicker.bind(this);
        this.startSession = this.startSession.bind(this);
        this.openOptionListScreen = this.openOptionListScreen.bind(this);
    }

    componentDidMount() {
        this.props.fetchClassrooms();
    }

    updatePicker(value, picker) {
        this.setState({
            [picker]: value
        });
        this.props.navigator.pop();
    }

    startSession() {
        alert('Starting session');
    }

    openOptionListScreen(listType) {
        const { classroom } = this.state;
        const singularListType = listType.slice(0, listType.length -1)
        if (singularListType === 'student') {
            this.props.fetchStudents(classroom.id);
        } else if (singularListType === 'deck') {
            this.props.fetchDecks(classroom.id);
        }
        this.props.navigator.push({
            screen: 'classroom.OptionListScreen',
            title: `Pick a ${singularListType}`,
            passProps: {
                onPickItem: this.updatePicker,
                listType: singularListType,
            },
        });
    }

    render() {
        const { classroom, student, deck } = this.state;
        console.log('PROPS:: ', this.props);
        return (
            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={() => this.openOptionListScreen('classrooms')}>
                    <View style={styles.pickerContainer}>
                        <Text style={[styles.pickerText, (classroom ? null : styles.defaultPickerText)]}>
                            {classroom ? classroom.label : 'Pick Classroom...'}
                        </Text>
                        <Text style={styles.pickerText}>&gt;</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.openOptionListScreen('students')}>
                    <View style={styles.pickerContainer}>
                        <Text style={[styles.pickerText, (student ? null : styles.defaultPickerText)]}>
                            {student ? student.label : 'Pick Student...'}
                        </Text>
                        <Text style={styles.pickerText}>&gt;</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.openOptionListScreen('decks')}>
                    <View style={styles.pickerContainer}>
                        <Text style={[styles.pickerText, (deck ? null : styles.defaultPickerText)]}>
                            {deck ? deck.label : 'Pick Deck...'}
                        </Text>
                        <Text style={styles.pickerText}>&gt;</Text>
                    </View>
                </TouchableOpacity>
                <Button disabled={!(classroom && student && deck)} title="Start Session" onPress={this.startSession} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {

    },
    pickerContainer: {
        justifyContent: 'space-between',
        padding: 15,
        marginLeft: 5,
        marginRight: 5,
        flexDirection: 'row',
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
    },
    pickerText: {
        fontSize: 18,
    },
    defaultPickerText: {
        color: '#bbb',
    }
});

function mapStateToProps({ classrooms, students, decks }) {
    return { classrooms, students, decks };
}

export default connect(mapStateToProps, actions)(PickClassroomAndStudentScreen);
