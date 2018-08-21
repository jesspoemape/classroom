import React , { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import ListItem from './../components/ListItem';

const OptionListScreen = ({ itemsList, onPickItem, listType }) => {
    console.log('ITEMS:: ', itemsList);
    console.log('LIST TYPE:: ', listType);
    let list = null;;
    if (itemsList) {
        list = itemsList.map(item => (
                <ListItem item={item} onPress={onPickItem} listType={listType} key={item.id} />
            ));
    }
    return list;
}

export default OptionListScreen;
