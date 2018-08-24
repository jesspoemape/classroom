import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class StartScreen extends Component {
    constructor(props) {
        super(props);

        this.teacherHandler = this.teacherHandler.bind(this);
        this.adminHandler = this.adminHandler.bind(this);
    }

    teacherHandler() {
        this.props.navigator.push({
            screen: 'classroom.PickClassroomAndStudentScreen',
        });
    }

    adminHandler() {
        this.props.navigator.push({
            screen: 'classroom.AdminLandingScreen',
        });
    }

    render () {
        return (
            <View>
                <Text>Start</Text>
                <Button title="Teacher" onPress={this.teacherHandler} />
                <Button title="Admin" onPress={this.adminHandler} />
            </View>
        );
    }
}

export default StartScreen;
