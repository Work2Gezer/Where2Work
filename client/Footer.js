import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';




const Footer = () => {

  const navigation = useNavigation();


  return (
    <>
      <View style={styles.container}>
        <View style={styles.view}>
          <Ionicons style={styles.icon} name="add" size={30} onPress={() => navigation.navigate('CreateMarkerPage')}></Ionicons>
        </View>
        <Image style={styles.logoW2W} source={require('./assets/where2work.png')} />
        <View style={styles.view}>
          <Ionicons style={styles.icon} name="person" size={30} onPress={() => navigation.navigate('LogInPage')}></Ionicons>
        </View>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    height: 60,
    backgroundColor: "#1098F7"
  },
  icon: {
    color: '#1098F7'
  },
  view: {
    width: 40,
    height: 40,
    marginRight: 15,
    marginLeft: 15,
    backgroundColor: 'white',
    borderRadius: 100,
    display: 'flex',
    justifyContent: "center",
    alignItems: "center"
  },
  logoW2W: {
    height: 60,
    width: 60,
  },
});

export default Footer;