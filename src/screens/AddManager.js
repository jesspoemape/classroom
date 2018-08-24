import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import AddClassroom from './../components/AddClassroom';
import AddStudent from './../components/AddStudent';
// import AddDeck from './../components/AddDeck';

class AddManagerScreen extends Component {

    render() {
        const { typeName } = this.props;
        if (typeName === 'classroom') {
            return (
                <AddClassroom />
            );
        } else if (typeName === 'student') {
            return (
                <AddStudent />
            );
        } else if (typeName === 'deck') {
            return (
                <View>
                    <AddDeck />
                    <AdminButton title="Add Deck" onPress={() => alert('Adding deck')} />
                </View>
            );
        }
        return null;
    }
 }

 export default AddManagerScreen;
