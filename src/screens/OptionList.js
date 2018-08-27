import React , { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, Text, ScrollView } from 'react-native';
import ListItem from './../components/ListItem';

const OptionListScreen = (props) => {
    console.log('PROPS:: ', props);
    const {onPickItem, listType, students, classrooms, decks} = props;
    let list = null;
    let listContent = [];
    if (props.studentsList && listType === 'student') {
        list = props.studentsList;
    } else if (props.decksList && listType === 'deck') {
        list = props.decksList;
    } else if (props.classroomsList && listType === 'classroom') {
        list = props.classroomsList;
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
