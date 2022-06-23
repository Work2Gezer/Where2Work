import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import MapView from "react-native-maps";
import axios from "axios";
import Footer from './Footer'

const Dashboard = ({ navigation: { navigate } }) => {

  const Map = () => {
    const [data, setData] = useState([]);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);

    let text = 'Waiting...';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }
    let getLatitude = location?.coords?.latitude
    let getLongitude = location?.coords?.longitude

    const ASPECT_RATIO =
      Dimensions.get("window").width / Dimensions.get("window").height;
    const LATITUDE_DELTA = 0.2;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

    const path = "http://192.168.1.97:3000/spots";
    useEffect(() => {
      axios
        .get(path)
        .then((response) => {
          setData(response.data);
          console.log(response.data[0]);
        })
        .catch(function (error) {
          console.log(
            "There has been a problem with your fetch operation: " + error.message
          );
          // ADD THIS THROW error
          throw error;
        });
    }, []);

    return (
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: getLatitude,
              longitude: getLongitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
          >
            {data.map((marker) => (
              <MapView.Marker
                style={styles.marker}
                key={marker._id}
                coordinate={{ latitude: marker.lat, longitude: marker.lng }}
                title={marker.name}
                description={marker.description}
                color={"blue"}
              />
            ))}
          </MapView>
        </View>
    );
  };


  return (
    <>
      <View style={styles.container}>
        <Map />
      </View>
      <Footer/>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  marker: {
    position: "absolute",
    backgroundColor: "blue"
  }
});

export default Dashboard;