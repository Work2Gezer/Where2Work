import 'react-native-gesture-handler';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import Dashboard from './Dashboard';
import OnBoardingScreen from './OnBoardingScreen';
import LogInPage from './LogInPage';
import SignInPage from './SignInPage';
import { Alert, LogBox } from 'react-native';
import Footer from './Footer';
import CreateMarkerPage from './CreateMarkerPage';

const HomeStack = createStackNavigator()
LogBox.ignoreAllLogs()

const App = () => {
    return (
        <NavigationContainer>
            <HomeStack.Navigator>
                <HomeStack.Screen name='OnBoardingScreen' component={OnBoardingScreen} options={{
                    title: '', headerStyle: {
                        backgroundColor: '#1098F7',
                    },
                }} />
                <HomeStack.Group
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#1098F7',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        }
                    }}
                >
                    <HomeStack.Screen name='Dashboard' component={Dashboard}
                        options={{
                            title: 'My home',
                            headerRight: () => (
                                <Ionicons name="search-outline" size={30} style={{ marginRight: 15, color: "#fff" }} onPress={() => Alert.alert('ici on cherche une ville par exemple')}></Ionicons>
                            )
                        }}
                    />
                    <HomeStack.Screen name='LogInPage' component={LogInPage} options={{ title: "Login or Sign Up" }} />
                    <HomeStack.Screen name='SigInInPage' component={SignInPage} options={{ title: "Sign Up" }} />
                    <HomeStack.Screen name='Footer' component={Footer} />
                    <HomeStack.Screen name='CreateMarkerPage' component={CreateMarkerPage} options={{ title: "Add a spot" }}/>
                </HomeStack.Group>
            </HomeStack.Navigator>
        </NavigationContainer>

    )
}

export default App