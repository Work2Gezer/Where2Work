import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";
import Marker from "react-native-maps";
import axios from "axios";
import { FontAwesome } from '@expo/vector-icons';

const Map = () => {
  const [data, setData] = useState([]);

  const ASPECT_RATIO =
    Dimensions.get("window").width / Dimensions.get("window").height;
  const LATITUDE_DELTA = 0.3;
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
    <>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 48.856614,
            longitude: 2.3522219,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          {data.map((marker) => (
            <MapView.Marker
              style={styles.marker}
              key={marker._id}
              coordinate={{ latitude : marker.lat , longitude : marker.lng }}
              title={marker.name}
              description={marker.description}
              color={"blue"}
            />
          ))}
        </MapView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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

export default Map;
