import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LogInPage = ({ navigation: { navigate } }) => {

    return (
        <>
            <View style={styles.container}>
                <Text>LoginPage</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});

export default LogInPage;