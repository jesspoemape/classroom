import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import AdminButton from './../components/AdminManagementButton';

class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: '',
            firstName: '',
            label: '',
            classroom: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(value, name) {
        this.setState({ [name]: value });
    }

    render() {
        const { lastName, firstName, label } = this.state;
        return (
            <View style={styles.container}>
                <Text>Add Student</Text>
                <View style={styles.inputsContainer}>
                    <TextInput
                        value={firstName}
                        onChangeText={text => this.handleInputChange(text, 'firstName')}
                        placeholder="First Name"
                        style={styles.input}
                    />
                    <TextInput
                        value={lastName}
                        onChangeText={text => this.handleInputChange(text, 'lastName')}
                        placeholder="Last Name"
                        style={styles.input}
                    />
                    <TextInput
                        value={label}
                        onChangeText={text => this.handleInputChange(text, 'label')}
                        placeholder="Label"
                        style={styles.input}
                    />
                </View>
                <AdminButton title="Add" onPress={() => alert('Adding student')} />
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

export default AddStudent;
