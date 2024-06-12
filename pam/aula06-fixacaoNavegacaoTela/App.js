import React from 'react';
import { Dimensions, Text, StyleSheet, View, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Produto from './screens/Produto';

export default function App() {

  const width = Dimensions.get('window').width;
  const stack = createStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Home"
          component={Home}
          options={{
            title: '',
            headerShown: false
          }}
        ></stack.Screen>
        <stack.Screen
          name="Produto"
          component={Produto}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#DB020A',
              padding: '0',
            }
          }}
        ></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}
