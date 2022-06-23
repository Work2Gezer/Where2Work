import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';




const Footer = () => {

    const navigation = useNavigation(); 


  return (
    <>
      <View style={styles.container}>
        <View style={styles.view}>
            <Ionicons style={styles.icon} name="person" size={30} onPress={() => navigation.navigate('LogInPage') }></Ionicons>
        </View>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: 'center',
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
    backgroundColor: 'white',
    borderRadius: 100,
    display: 'flex',
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Footer;