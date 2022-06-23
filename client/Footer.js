import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Location from 'expo-location';
import Map from './Map';
import { Ionicons } from "@expo/vector-icons";


const Footer = () => {



  useEffect(() => {

  }, []);



  return (
    <>
      <View style={styles.container}>
        <Ionicons name="person" size={30} onPress={() => Alert.alert('ici on cherche une ville par exemple')}></Ionicons>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: "blue"
  },
});

export default Footer;