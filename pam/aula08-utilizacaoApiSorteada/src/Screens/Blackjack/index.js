import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Modal } from 'react-native';
import BalanceService from '../../Services/BalanceService';

const Blackjack = () => {
  
  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <View>
          <Text style={styles.navLogo}>CALABRET</Text>
        </View>
        <View style={styles.saldoContainer}>
          <Text style={styles.saldo}>Saldo: R$<Text style={styles.saldoHighlight}>{balance}</Text></Text>
        </View>
      </View>



      {/* Aposta Section */}
      <View style={styles.bettingContainer}>
        <Text style={styles.bank}>Aposta: R${aposta}</Text>
      </View>

      {/* Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Resultado do Jogo</Text>
            <Text style={styles.modalBody}>Você apostou R${aposta}</Text>
            <TouchableOpacity style={styles.btnApostar} onPress={handleJogarNovamente}>
              <Text style={styles.btnText}>Jogar Novamente</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>&copy; 2024 Calabret. Todos os direitos reservados.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    justifyContent: 'space-between',
  },
  navbar: {
    backgroundColor: '#333',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    color: '#fff',
  },
  navBet: {
    color: 'yellow',
  },
  navItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  navLink: {
    color: '#fff',
    fontSize: 16,
  },
  bettingContainer: {
    backgroundColor: '#003300',
    borderRadius: 15,
    padding: 20,
    minHeight: '50%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bank: {
    color: 'white',
    fontSize: 20,
  },
  chipsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  chip: {
    margin: 10,
    alignItems: 'center',
  },
  chipImage: {
    width: 70,
    height: 70,
  },
  textOverlay: {
    position: 'absolute',
    width: 'auto',
    margin: 0,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  btnApostar: {
    backgroundColor: '#ff4747',
    padding: 15,
    borderRadius: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    backgroundColor: '#333',
    padding: 15,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
  },
  modalBody: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  betsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  betImage: {
    width: 80,
    height: 80,
    margin: 10,
  },
  betText: {
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default Blackjack;
