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
        return this.props.student.studiedDecks.map(deck => {
            const deckScores =  deck.studyData.map(studySession => studySession.score);
            return (
                <View key={deck.deckId}>
                    <Text style={styles.chartHeader}>{deck.deckId}</Text>
                    <ProgressChart data={deckScores} />
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
    }
});

function mapStateToProps({ student }) {
    return { student };
}

export default connect(mapStateToProps, actions)(StudentStatsScreen);
