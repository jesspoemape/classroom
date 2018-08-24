import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import * as actions from './../actions';

class PickClassroomAndStudentScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classroom: null,
            student: null,
            deck: null,
            random: false,
        };

        this.updatePicker = this.updatePicker.bind(this);
        this.startSession = this.startSession.bind(this);
        this.openOptionListScreen = this.openOptionListScreen.bind(this);
        this.randomizeHandler = this.randomizeHandler.bind(this);
        this.shuffleArray = this.shuffleArray.bind(this);
    }

    componentDidMount() {
        this.props.fetchClassroomsList();
    }

    updatePicker(value, picker) {
        this.setState({
            [picker]: value
        });
        this.props.navigator.pop();
    }

    startSession() {
        const selectedDeck = this.props.decks.find(deck => deck.id === this.state.deck.id);
        const cardsList = this.state.random ? this.shuffleArray(selectedDeck.cards) : selectedDeck.cards;
        this.props.navigator.push({
            screen: 'classroom.SwiperDeckScreen',
            passProps: {
                cardsList,
            }
        });
    }

    openOptionListScreen(listType) {
        const { classroom, random } = this.state;
        const singularListType = listType.slice(0, listType.length -1)
        if (singularListType === 'student') {
            this.props.fetchStudentsList(classroom.id);
        } else if (singularListType === 'deck') {
            this.props.fetchDecksList(classroom.id);
        }
        this.props.navigator.push({
            screen: 'classroom.OptionListScreen',
            title: `Pick a ${singularListType}`,
            passProps: {
                onPickItem: this.updatePicker,
                listType: singularListType,
            },
        });
    }

    randomizeHandler(value) {
        this.setState({ random: value });
    }

    shuffleArray(array) {
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;
        
          // While there remain elements to shuffle...
          while (0 !== currentIndex) {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }
        
          return array;
    }

    render() {
        const { classroom, student, deck, random } = this.state;
        return (
            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={() => this.openOptionListScreen('classroomsList')}>
                    <View style={styles.pickerContainer}>
                        <Text style={[styles.pickerText, (classroom ? null : styles.defaultPickerText)]}>
                            {classroom ? classroom.label : 'Pick Classroom...'}
                        </Text>
                        <Text style={styles.pickerText}>&gt;</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.openOptionListScreen('studentsList')} disabled={!classroom}>
                    <View style={styles.pickerContainer}>
                        <Text style={[styles.pickerText, (student ? null : styles.defaultPickerText)]}>
                            {student ? student.label : 'Pick Student...'}
                        </Text>
                        <Text style={styles.pickerText}>&gt;</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.openOptionListScreen('decksList')} disabled={!classroom && !student}>
                    <View style={styles.pickerContainer}>
                        <Text style={[styles.pickerText, (deck ? null : styles.defaultPickerText)]}>
                            {deck ? deck.label : 'Pick Deck...'}
                        </Text>
                        <Text style={styles.pickerText}>&gt;</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.switchContainer}>
                    <Switch value={random} onValueChange={this.randomizeHandler} />
                    <Text style={styles.switchText}>Random Order</Text>
                </View>
                <View style={styles.startButtonContainer}>
                    <Button disabled={!(classroom && student && deck)} title="Start Session" onPress={this.startSession} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    pickerContainer: {
        justifyContent: 'space-between',
        padding: 15,
        marginLeft: 5,
        marginRight: 5,
        flexDirection: 'row',
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
    },
    pickerText: {
        fontSize: 18,
    },
    defaultPickerText: {
        color: '#bbb',
    },
    switchContainer: {
       flexDirection: 'row', 
       alignItems: 'center',
       justifyContent: 'center',
       margin: 20,
    },
    switchText: {
         paddingLeft: 10,
         fontSize: 18,
    },
    startButtonContainer: {
        justifyContent: 'flex-end',
    },
});

function mapStateToProps({ classroomsList, studentsList, decksList }) {
    return { classroomsList, studentsList, decksList };
}

export default connect(mapStateToProps, actions)(PickClassroomAndStudentScreen);
