import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { Ionicons } from "@expo/vector-icons";


const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
            onSkip={() => navigation.navigate('Dashboard')}
            onDone={() => navigation.navigate('Dashboard')}
            pages={[
                {
                    backgroundColor: '#1098F7',
                    image: <Ionicons name="map-outline" size={50}></Ionicons>,
                    title: 'Bienvenue !',
                    subtitle: 'Bienvenue sur notre application Where2Work !',
                },
                {
                    backgroundColor: '#A6E4D0',
                    image: <Ionicons name="map-outline" size={50}></Ionicons>,
                    title: 'Where2Work',
                    subtitle: 'Organiser, partager vos endroits préférés pour travailler 💻',
                }
            ]}
        />
    )
}

export default OnboardingScreen
