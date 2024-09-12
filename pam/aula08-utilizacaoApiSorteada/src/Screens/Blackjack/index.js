import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet, Alert, Modal, TouchableOpacity } from 'react-native';
import Navbar from '../../Components/Navbar';

const Blackjack = ({ aposta }) => {
  const [deckId, setDeckId] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  var bank = 100;
  const [modalVisible, setModalVisible] = useState(false);

  const blackjackStart = async () => {
    const deckResponse = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    const deckData = await deckResponse.json();
    setDeckId(deckData.deck_id);


    const playerResponse = await drawCards(2, deckData.deck_id);
    const dealerResponse = await drawCards(2, deckData.deck_id);

    setPlayerCards(playerResponse.cards);
    setDealerCards(dealerResponse.cards);

    const playerScore = calcScore(playerResponse.cards);
    const dealerScore = calcFirstDealerScore(dealerResponse.cards);

    setPlayerScore(playerScore);
    setDealerScore(dealerScore);

    if (playerScore === 21) {
      checkWinner(playerScore, dealerScore);
    }
  };

  const drawCards = async (amount, deckId) => {
    const response = await fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=${amount}`);
    const data = await response.json();
    return data;
  };

  const calcScore = (cards) => {
    let total = 0;
    let hasAce = false;

    cards.forEach((card) => {
      const cardValue = valueOfCard(card.value);
      total += cardValue;
      if (card.value === 'ACE') hasAce = true;
    });

    if (total > 21 && hasAce) total -= 10;

    return total;
  };

  const calcFirstDealerScore = (cards) => {
    let total = 0;
    let hasAce = false;

    cards.forEach((card, index) => {
      if (index !== 0) {
        const cardValue = valueOfCard(card.value);
        total += cardValue;
        if (card.value === 'ACE') hasAce = true;
      }
    });

    if (total > 21 && hasAce) total -= 10;

    return total;
  };

  const valueOfCard = (value) => {
    if (['JACK', 'QUEEN', 'KING'].includes(value)) return 10;
    if (value === 'ACE') return 11;
    return parseInt(value);
  };

  const checkWinner = async (playerScore, dealerScore) => {
    await delay(300);
    if (playerScore == 21 && dealerScore == 21 || playerScore == dealerScore) {
      alert('empate')
      return;
    }
    if (playerScore == 21 || dealerScore > 21) {
      alert('player wins')
      return;
    }

    if (dealerScore == 21 || playerScore > 21) {
      alert('dealer wins')
      return;
    }

    if (dealerScore != 21 && playerScore != 21) {
      if (dealerScore > playerScore) {
        alert('dealer wins')
        return;
      }
      if (playerScore > dealerScore) {
        alert('player wins')
        return;
      }
    }
  };

  const handleHit = async () => {
    const newCardResponse = await drawCards(1, deckId);
    const newCard = newCardResponse.cards[0];
    const updatedPlayerCards = [...playerCards, newCard];

    setPlayerCards(updatedPlayerCards);
    const newPlayerScore = calcScore(updatedPlayerCards);
    setPlayerScore(newPlayerScore);

    if (newPlayerScore > 21 || newPlayerScore == 21) checkWinner(newPlayerScore, dealerScore);
  };

  const handleStand = async () => {
    let updatedDealerCards = [...dealerCards]; // Faz uma cópia do array inicial
    let currentDealerScore = calcScore(dealerCards);
    while (currentDealerScore < 17 && currentDealerScore < playerScore) {
      const newCardResponse = await drawCards(1, deckId);
      const newCard = newCardResponse.cards[0];

      updatedDealerCards.push(newCard); // Adiciona a nova carta com `push()`

      // Atualiza o estado com uma cópia do array modificado
      setDealerCards([...updatedDealerCards]);

      currentDealerScore = calcScore(updatedDealerCards);
      setDealerScore(currentDealerScore);
      delay(1000);
    }

    checkWinner(playerScore, currentDealerScore);
  };

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    blackjackStart();
  }, []);

  return (

    <View style={styles.container}>

      <Navbar></Navbar>
      <View style={styles.bettingContainer}>
        <Text>R${bank}</Text>
        <View style={styles.cardsContainer}>
          <Text>Dealer's Cards:</Text>
          <View style={styles.cards}>
            {dealerCards.map((card, index) => (
              <Image key={index} source={{ uri: index === 0 && dealerCards.length < 3 ? 'https://deckofcardsapi.com/static/img/back.png' : card.image }} style={styles.cardImage} />
            ))}
          </View>
          <Text style={styles.dealerScore}>Dealer's Score: {dealerScore}</Text>
        </View>
        <View style={styles.cardsContainer}>
          <Text>Player's Cards:</Text>
          <View style={styles.cards}>
            {playerCards.map((card, index) => (
              <Image key={index} source={{ uri: card.image }} style={styles.cardImage} />
            ))}
          </View>
          <Text style={styles.playerScore}>Player's Score: {playerScore}</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Hit" onPress={handleHit} />
        <Button title="Stand" onPress={handleStand} />
      </View>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Resultado do Jogo</Text>
            <Text style={styles.modalBody}>Você apostou R${aposta}</Text>
            <TouchableOpacity
              style={styles.btnApostar}
              onPress={() => console.log('a')}
            >
              <Text style={styles.btnText}>Jogar Novamente</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          &copy; 2024 Calabret. Todos os direitos reservados.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0d0d0d',
    padding: 20,
  },
  gameInfo: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'green',
  },
  cardsContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  cards: {
    flexDirection: 'row',
  },
  cardImage: {
    width: 100,
    height: 150,
    margin: 5,
    borderRadius: 5,

  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
    justifyContent: "space-between",
  },
  navbar: {
    backgroundColor: "#333",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: 24,
    color: "#fff",
  },
  navBet: {
    color: "yellow",
  },
  navItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
  navLink: {
    color: "#fff",
    fontSize: 16,
  },
  bettingContainer: {
    backgroundColor: "#003300",
    borderRadius: 15,
    padding: 10,
    minHeight: "50vh",
    alignItems: "center",
    color: 'white',
    justifyContent: "space-evenly",
  },
  bank: {
    color: "white",
    fontSize: 20,
  },
  chipsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  chip: {
    margin: 10,
    alignItems: "center",
  },
  chipImage: {
    width: 70,
    height: 70,
  },
  textOverlay: {
    position: "absolute",
    width: "auto",
    margin: 0,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  btnApostar: {
    backgroundColor: "#ff4747",
    padding: 15,
    borderRadius: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  footer: {
    backgroundColor: "#333",
    padding: 15,
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#333",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 20,
  },
  modalBody: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 20,
  },
  betsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  betImage: {
    width: 80,
    height: 80,
    margin: 10,
  },
  betText: {
    color: "#ffffff",
    textAlign: "center",
    marginTop: 5,
  },

});

export default Blackjack;
