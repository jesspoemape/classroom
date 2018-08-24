import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AdminButton from './../components/AdminManagementButton';

class AdminLandingScreen extends Component {
    constructor(props) {
        super(props) 

        this.handleNavigation = this.handleNavigation.bind(this);
    }

    handleNavigation(screen, addType) {
        this.props.navigator.push({
            screen, 
            passProps: {
                typeName: addType,
            }
        });
    }

    render() {
        return (
            <View>
                <View style={styles.managementContainer}>
                    <Text>Manage</Text>
                    <AdminButton title="Manage Classrooms" onPress={() => this.handleNavigation('classroom.AddManagerScreen', 'classroom')} />
                    <AdminButton title="Manage Students" onPress={() => this.handleNavigation('classroom.AddManagerScreen', 'student')} />
                    <AdminButton title="Manage Decks" onPress={() => this.handleNavigation('classroom.AddManagerScreen', 'deck')} />
                </View>
                <View style={styles.statsContainer}>
                    <Text>Stats</Text>
                    <AdminButton title="View Classroom Stats" onPress={() => this.handleNavigation('')} />
                    <AdminButton title="View Student Stats" onPress={() => this.handleNavigation('')} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    managementContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    statsContainer: {
        alignItems: 'center',
    }
});

export default AdminLandingScreen;
