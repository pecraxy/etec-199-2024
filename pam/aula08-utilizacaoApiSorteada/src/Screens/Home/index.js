import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import BalanceService from '../../Services/BalanceService';

const CalabretScreen = ({ navigation }) => {
  let balance = BalanceService.getFormattedBalance();
  
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

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.mainContent}>
        <View style={styles.logoContainer}>
          <Image source={require('../../../assets/logo.png')} style={styles.logo} />
          <Text style={styles.slogan}>Aposta Calabreso!</Text>
        </View>

        <View style={styles.gamesSection}>
          <TouchableOpacity style={styles.gameCard} onPress={() => navigation.navigate('Blackjack')}>
            <Image source={{ uri: 'https://images.sigma.world/blackjack-card-counting-scaled-1.jpg' }} style={styles.cardImage} />
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>Blackjack</Text>
              <Text style={styles.cardText}>Se divirta e ganhe dinheiro clássico no jogo de 21.</Text>
              <Text style={styles.playButton}>Jogar Agora</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gameCard}>
            <Image source={{ uri: 'https://t2.tudocdn.net/718083?w=1920' }} style={styles.cardImage} />
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>Tigrinho</Text>
              <Text style={styles.cardText}>Em breve...</Text>
              <Text style={styles.playButton}>Em breve...</Text>
            </View>
          </TouchableOpacity>
          {/* Adicione mais cards de jogos aqui conforme necessário */}
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>&copy; 2024 Calabret. Todos os direitos reservados.</Text>
      </View>
    </View>
  );
};

export default CalabretScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  navLogo:{
    color: 'white',
  },
  navbar: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navLinks: {
    flexDirection: 'row',
  },
  navLink: {
    color: '#ffffff',
    fontSize: 18,
    marginRight: 15,
  },
  saldoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  saldo: {
    color: '#ffffff',
    fontSize: 18,
  },
  saldoHighlight: {
    color: '#ff4747',
  },
  depositoIcon: {
    fontSize: 24,
    color: '#ffffff',
    marginLeft: 10,
  },
  mainContent: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 350,
    height: 350,
    marginBottom: 20,
  },
  slogan: {
    fontSize: 20,
    color: '#ff4747',
  },
  gamesSection: {
    width: '100%',
  },
  gameCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardBody: {
    padding: 20,
    alignItems: 'center',
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 20,
    marginBottom: 10,
  },
  cardText: {
    color: '#b3b3b3',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  playButton: {
    backgroundColor: '#ff4747',
    color: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  footer: {
    backgroundColor: '#1a1a1a',
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#b3b3b3',
    fontSize: 14,
  },
});
