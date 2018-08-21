import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ListItem = ({ item, onPress, listType }) => (
    <TouchableOpacity onPress={() => onPress(item, listType)}>
        <View style={styles.item}>
            <Text style={styles.itemText}>{item.label}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    item: {
        padding: 15,
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
    },
    itemText: {
        fontSize: 18,
    }
});

export default ListItem;
