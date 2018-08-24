import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AdminManagementButton = ({ title, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{title}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#63ccf2',
        borderRadius: 25,
        padding: 15,
        margin: 10,
        alignItems: 'center',
        width: 250,
    },
    buttonText: {
        fontSize: 18,
    },
});

export default AdminManagementButton;
