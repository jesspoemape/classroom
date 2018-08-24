import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import AdminButton from './../components/AdminManagementButton';

class AddClassroom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classroomLabel: '',
            teacherName: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(value, name) {
        this.setState({ [name]: value });
    }

    render() {
        const { classroomLabel, teacherName } = this.state;
        return (
            <View style={styles.container}>
                <Text>Add Classroom</Text>
                <View style={styles.inputsContainer}>
                    <TextInput 
                        value={classroomLabel}
                        onChangeText={text => this.handleInputChange(text, 'classroomLabel')}
                        placeholder="Classroom Label"
                        style={styles.input}
                    />
                    <TextInput
                        value={teacherName}
                        onChangeText={text => this.handleInputChange(text, 'teacherName')}
                        placeholder="Teacher Name"
                        style={styles.input}
                    />
                </View>
                <AdminButton title="Add" onPress={() => alert('Adding classroom')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10,
    },
    input : {
        padding: 10,
        fontSize: 18,
    },
    inputsContainer: {
        width: '100%'
    },
});

export default AddClassroom;
