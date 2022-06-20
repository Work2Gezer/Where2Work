import 'react-native-gesture-handler';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import Dashboard from './Dashboard';
import OnBoardingScreen from './OnBoardingScreen';
import LogInPage from './LogInPage';

import { Alert, LogBox } from 'react-native';

const HomeStack = createStackNavigator()
LogBox.ignoreAllLogs() // désactive les warnings jaunes pas beau du tout

const App = () => {
    return (
        <NavigationContainer>
            <HomeStack.Navigator>
                <HomeStack.Screen name='OnBoardingScreen' component={OnBoardingScreen} options={{
                    title: '', headerStyle: {
                        backgroundColor: '#A6E4D0',
                    },
                }} />
                <HomeStack.Group
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: 'blue',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerRight: () => (
                            <Ionicons name="search-outline" size={30} onPress={() => Alert.alert('ici on cherche une ville par exemple')}></Ionicons>
                        )
                    }}
                >
                    <HomeStack.Screen name='Dashboard' component={Dashboard}
                        options={{
                            title: 'My home',
                        }}
                    />
                    <HomeStack.Screen name='LogInPage' component={LogInPage} />
                </HomeStack.Group>
            </HomeStack.Navigator>
        </NavigationContainer>

    )
}

export default App