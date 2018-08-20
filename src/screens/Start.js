import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class StartScreen extends Component {
    constructor(props) {
        super(props);

        this.teacherHandler = this.teacherHandler.bind(this);
        this.adminHandler = this.adminHandler.bind(this);
    }

    teacherHandler() {
        alert('You are a Teacher');
    }

    adminHandler() {
        alert('You are an Admin');
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
