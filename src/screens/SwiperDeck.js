import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-deck-swiper';

class SwiperDeckScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sessionData: {
                incorrectCards: [],
                correctCards: [],
            },
            swipedAll: false,
        };

        this.renderCard = this.renderCard.bind(this);
        this.swipedLeftHandler = this.swipedLeftHandler.bind(this);
        this.swipedRightHandler = this.swipedRightHandler.bind(this);
        this.checkForLast = this.checkForLast.bind(this);
    }

    renderCard(card) {
        return (
            <View style={styles.card} key={card.id}>
                <Text style={styles.text}>{card.data}</Text>
            </View>
        )
    }

    swipedRightHandler(cardIndex) {
        if (!this.checkForLast(cardIndex)) {
            const cardId = this.props.cardsList[cardIndex].id;            
            this.setState(prevState => (
                { 
                    sessionData: {
                        ...prevState.sessionData,
                        correctCards: [...prevState.sessionData.correctCards, cardId],
                },
            }));
        }
    }

    swipedLeftHandler(cardIndex) {
        if (!this.checkForLast(cardIndex)) {
            const cardId = this.props.cardsList[cardIndex].id;
            this.setState(prevState => (
                { 
                    sessionData: {
                        ...prevState.sessionData,
                        incorrectCards: [...prevState.sessionData.incorrectCards, cardId],
                },
            }));
        }
    }

    checkForLast(cardIndex) {
        let isLastCard = false;
        if (cardIndex + 1 === this.props.cardsList.length) {
            isLastCard = true;
            this.setState({ swipedAll: true });
        }
        return isLastCard;
    }

    render() {
        const { cardsList } = this.props;
        const { swipedAll } = this.state;
        console.log('SESSION DATA:: ', this.state.sessionData);
        return (
            <View style={styles.container}>
                <Swiper
                    cards={swipedAll ? [] : cardsList}
                    renderCard={this.renderCard}
                    onSwipedAll={this.swipedAllHandler}
                    onSwipedRight={this.swipedRightHandler}
                    onSwipedLeft={this.swipedLeftHandler}
                    cardIndex={0}
                    backgroundColor={'#4FD0E9'}
                    stackSize= {3}
                    verticalSwipe={false}
                />
                {swipedAll && (
                    <View style={styles.allDoneContainer}>
                        <Text style={styles.allDoneText}>All Done!</Text>
                    </View>)
                }
            </View>    
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5FCFF",
      alignItems: 'center',
      marginTop: -20,
    },
    card: {
      flex: 1,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: "#E8E8E8",
      justifyContent: "center",
      backgroundColor: "white",
    },
    text: {
      textAlign: "center",
      fontSize: 50,
      backgroundColor: "transparent"
    },
    allDoneText: {
        fontSize: 50,
    },
    allDoneContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
  });

export default SwiperDeckScreen;
