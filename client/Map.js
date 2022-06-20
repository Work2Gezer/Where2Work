import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

const Map = ({ navigation: { navigate } }) => {

    return (
        <>
        <View style={styles.container}>
            <Text>ICI CEST LA MAP</Text>
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

  export default Map;