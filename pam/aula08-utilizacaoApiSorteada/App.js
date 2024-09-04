import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Route from './src/Routes';

export default function App() {
  return(
    <Route></Route>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141a29',
    alignItems: "center"
  },
});
