import 'react-native-gesture-handler';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from './Dashboard';

const HomeStack = createStackNavigator()


function App() {
    return (
        <NavigationContainer>
        <HomeStack.Navigator headerMode='none'>
            <HomeStack.Screen name='Dashboard' component={Dashboard} />
        </HomeStack.Navigator>
        </NavigationContainer>

    )
}

export default App