import React , { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, Text, ScrollView } from 'react-native';
import ListItem from './../components/ListItem';

const OptionListScreen = ({ onPickItem, listType, students, classrooms, decks }) => {
    let list = null;
    let listContent = [];
    if (studentsList && listType === 'studentsList') {
        list = studentsList;
    } else if (decksList && listType === 'decksList') {
        list = decksList;
    } else if (classroomsList && listType === 'classroomsList') {
        list = classroomsList;
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

function mapStateToProps({ studentsList, classroomsList, decksList }) {
    return { studentsList, classroomsList, decksList }
}

export default connect(mapStateToProps, null)(OptionListScreen);
