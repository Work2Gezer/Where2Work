import 'react-native-gesture-handler';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from './Dashboard';
import Map from './Map';

const HomeStack = createStackNavigator()


function App() {
    return (
        <NavigationContainer>
        <HomeStack.Navigator >
            <HomeStack.Screen name='Dashboard' component={Dashboard}
            options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
            <HomeStack.Screen name='Map' component={Map}/>
        </HomeStack.Navigator>
        </NavigationContainer>

    )
}

export default App