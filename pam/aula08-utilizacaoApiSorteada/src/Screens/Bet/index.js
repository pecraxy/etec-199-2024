import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Modal,
} from "react-native";
import Navbar from "../../Components/Navbar";
import BalanceService from "../../Services/BalanceService";

const Bet = ({navigation}) => {
  let balance = BalanceService.getBalance();
  
  const [aposta, setAposta] = useState(0);
  const [bets, setBets] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const chips = [
    { value: 1, img: require("../../../assets/chip.png") },
    { value: 5, img: require("../../../assets/chip.png") },
    { value: 25, img: require("../../../assets/chip.png") },
    { value: 50, img: require("../../../assets/chip.png") },
    { value: 100, img: require("../../../assets/chip.png") },
  ];

  // Adicionar ficha ao apostar
  const addBet = (chip) => {
    setBets([...bets, chip]);
    handleAposta(chip.value);
  };

  // Remover ficha da aposta
  const removeBet = (index) => {
    const updatedBets = [...bets];
    let removedChip = updatedBets.splice(index, 1)[0]; // Remove o item pelo índice
    setBets(updatedBets);
    handleAposta(-removedChip.value);
  };

  const handleAposta = (value) => {
    setAposta(aposta + value);
  };

  const handleJogarNovamente = () => {
    setAposta(0);
    setModalVisible(false);
  };

  const bet = () => {
    if (aposta > 0 ){
      alert(aposta);
      BalanceService.saldoUpdate(parseInt(-aposta));
      navigation.navigate('Blackjack');
    }
  }

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Aposta Section */}
      <View style={styles.bettingContainer}>
        <Text style={styles.bank}>Aposta: R${aposta}</Text>
        <View style={styles.betsContainer}>
          {bets.map((chip, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => removeBet(index)}
              style={styles.chip}
            >
              <Image
                source={require("../../../assets/chip.png")}
                style={styles.chipImage}
              />
              <Text style={styles.textOverlay}>{chip.value}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.chipsContainer}>
          {chips.map((chip, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => addBet(chip)}
              style={styles.chip}
            >
              <Image source={chip.img} style={styles.chipImage} />
              <Text style={styles.textOverlay}>{chip.value}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={styles.btnApostar}
          onPress={() => bet()}
        >
          <Text style={styles.btnText}>Apostar</Text>
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Resultado do Jogo</Text>
            <Text style={styles.modalBody}>Você apostou R${aposta}</Text>
            <TouchableOpacity
              style={styles.btnApostar}
              onPress={handleJogarNovamente}
            >
              <Text style={styles.btnText}>Jogar Novamente</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Footer */}
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
    padding: 20,
    minHeight: "50%",
    alignItems: "center",
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

export default Bet;
