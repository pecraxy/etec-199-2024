import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Blackjack from '../screens/Blackjack';
import Bet from '../Screens/Bet';

export default function App() {
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
                    name="Bet"
                    component={Bet}
                    options={{
                        title: '',
                        headerShown: false
                    }}
                ></stack.Screen>
                <stack.Screen
                    name="Blackjack"
                    component={Blackjack}
                    options={{
                        title: '',
                        headerShown: false
                    }}
                ></stack.Screen>
            </stack.Navigator>
        </NavigationContainer>
    );
}