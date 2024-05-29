import React from 'react';
import { Text, StyleSheet, View, Image,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Details from './screens/Details';

export default function App() {
  const stack = createStackNavigator();
  return (
        <NavigationContainer>
          <stack.Navigator>
            <stack.Screen name="Home" component={Home}></stack.Screen>
            <stack.Screen name="Details" component={Details}></stack.Screen>
          </stack.Navigator>
        </NavigationContainer>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CAF0F8',
    borderColor: '#90E0EF',
    paddingHorizontal: 20,
  }
});