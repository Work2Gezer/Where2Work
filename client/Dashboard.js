import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView, Button } from 'react-native';

const Dashboard = ({ navigation: { navigate } }) => {


  return (
    <>
    <View style={styles.container}>
      <Text>TEST DASHBOARD</Text>
      <Button
  onPress={() =>
   navigate('Map')
 }
  title="click Map"
/>
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

export default Dashboard;