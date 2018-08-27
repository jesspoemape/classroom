import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions';
import { View, Text, StyleSheet } from 'react-native';
import ProgressChart from './../components/ProgressChart';

class StudentStatsScreen extends Component {
    constructor(props) {
        super(props);

        this.renderDataSection = this.renderDataSection.bind(this);
    }

    componentDidMount() {
        this.props.fetchStudent(1, 1);
    }

    renderDataSection() {
        const { studiedDecks } = this.props.student;
        return studiedDecks.map(deck => {
            const deckScores =  deck.studyData.map(studySession => studySession.score);
            return (
                <View key={deck.deckId} style={styles.statsContainer}>
                    <Text style={styles.chartHeader}>{deck.deckId}</Text>
                    <ProgressChart data={deckScores} />
                    <View style={styles.secondaryStatsContainer}>
                        <View style={styles.timesStudiedContainer}>
                            <Text>Studied</Text>
                            <Text style={styles.largeNumber}>{deckScores.length}</Text>
                            <Text>times</Text>
                        </View>
                        <View style={styles.timesStudiedContainer}>
                            <Text>Studied</Text>
                            <Text>{deckScores.length}</Text>
                            <Text>Times</Text>
                        </View>
                    </View>
                </View>
            );
        });
    }

    render() {
        const { student } = this.props;
        if (student) {
            return (
                <View style={styles.container}>
                    <Text style={styles.header}>{`Progress for ${student.firstName}`}</Text>
                    {this.renderDataSection()}
                </View>
            );
        }
        return <View><Text>Loading...</Text></View>;
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    header: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 30,
    },
    chartHeader: {
        textAlign: 'center',
        marginBottom: -30,
    },
    timesStudiedContainer: {
        alignItems: 'center',
    },
    statsContainer: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    secondaryStatsContainer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: -20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    largeNumber: {
        fontSize: 30,
    },
});

function mapStateToProps({ student }) {
    return { student };
}

export default connect(mapStateToProps, actions)(StudentStatsScreen);
