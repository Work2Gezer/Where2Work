import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Map from './Map';

const Dashboard = ({ navigation: { navigate } }) => {


  return (
    <>
      <View style={styles.container}>
        <Map />
        <Button
          onPress={() =>
            navigate('LogInPage')
          }
          title="Log toi batard"
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