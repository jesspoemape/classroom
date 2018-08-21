import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const ListItem = ({ item, onPress, listType }) => (
    <TouchableOpacity onPress={() => onPress(item, listType)}>
        <View>
            <Text>{item.label}</Text>
        </View>
    </TouchableOpacity>
);

export default ListItem;
