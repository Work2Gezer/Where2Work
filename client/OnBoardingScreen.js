import React from 'react'
import { Image, StyleSheet } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import { Ionicons } from "@expo/vector-icons";


const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
            style={styles.body}
            onSkip={() => navigation.navigate('Dashboard')}
            onDone={() => navigation.navigate('Dashboard')}
            pages={[
                {
                    backgroundColor: '#1098F7',
                    image: <Image style={styles.logo} source={require('./assets/where2work.png')} />,
                    title: 'Welcome !',
                    subtitle: 'Welcome to Where2Work !',
                },
                {
                    backgroundColor: '#1098F7',
                    image: <Image style={styles.logo} source={require('./assets/where2work.png')} />,
                    title: 'Where2Work',
                    subtitle: 'Find and share your favorite working spots 💻',
                }
            ]}
        />
    )
}

const styles = StyleSheet.create({
    body: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 300,
        height: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default OnboardingScreen