import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import BalanceService from '../../Services/BalanceService';

const Navbar = () => {
    let navbarBalance = BalanceService.getBalance();
    return (
    <View style={styles.navbar}>
      <View>
        <Text style={styles.navLogo}>CALABRET</Text>
      </View>
      <View style={styles.saldoContainer}>
        <Text style={styles.saldo}>
          Saldo: R$<Text style={styles.saldoHighlight}>{navbarBalance}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navLogo: {
    color: "white",
  },
  navbar: {
    backgroundColor: "#1a1a1a",
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navLinks: {
    flexDirection: "row",
  },
  navLink: {
    color: "#ffffff",
    fontSize: 18,
    marginRight: 15,
  },
  saldoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  saldo: {
    color: "#ffffff",
    fontSize: 18,
  },
  saldoHighlight: {
    color: "#ff4747",
  },
});

export default Navbar;
