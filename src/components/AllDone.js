import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AllDone = ({ restartStudySession, handleHomeNavigation }) => (
    <View style={styles.allDoneContainer}>
        <Text style={styles.allDoneText}>
            All Done!
        </Text>
        <View style={styles.buttonContainer}>
            <Button title="Start Over" onPress={restartStudySession} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Home" onPress={handleHomeNavigation} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    allDoneText: {
        fontSize: 50,
    },
    allDoneContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        padding: 5,
        margin: 5,
        width: '75%',
        backgroundColor: '#fff',
    }
  });

export default AllDone;
