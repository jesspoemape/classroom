import React , { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, Text, ScrollView } from 'react-native';
import ListItem from './../components/ListItem';

const OptionListScreen = ({ onPickItem, listType, students, classrooms, decks }) => {
    let list = null;
    let listContent = [];
    if (students && listType === 'student') {
        list = students;
    } else if (decks && listType === 'deck') {
        list = decks;
    } else if (classrooms && listType === 'classroom') {
        list = classrooms;
    }

    if (list) {
         listContent = list.map(item => (
                <ListItem item={item} onPress={onPickItem} listType={listType} key={item.id} />
        ));
    }
    return (
        <ScrollView>{listContent}</ScrollView>
    ); 
}

function mapStateToProps({ students, classrooms, decks }) {
    return { students, classrooms, decks }
}

export default connect(mapStateToProps, null)(OptionListScreen);
